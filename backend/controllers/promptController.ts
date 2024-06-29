import axios from "axios";
import { Request, RequestHandler, Response } from "express";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { v4 as uuidv4 } from 'uuid';
import User from "../models/userModel";
const { exec } = require('child_process');

console.log("abcd");

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const generateAiFlow: RequestHandler = async (req: Request, res: Response) => {
  try {
    const prompt: string = req.body.prompt;
    const aiUrl: string = process.env.AI_URL + '/output';
    const stringWithPercent20 = prompt.replace(/ /g, '%20');

    const aiResponse = await axios.get(aiUrl, {
      params: {
        prompt: stringWithPercent20,
      },
    });

    const responseData: any = aiResponse.data;

    console.log(responseData);
    const userId = uuidv4()
    // const user = new User({containerId: containerId})
    // user.save().then(() => console.log('container id saved'));

    const bashScript = 'node-red-stuff/spin-new-node-red-container.sh';
    let containerId = '';
    exec(`bash ${bashScript}`, (error: any, stdout: any, stderr: any) => {
      if (error) {
        console.error(`Error executing the script: ${error}`);
        return;
      }

      console.log('Script output:');
      console.log('container created id:', stdout);
      containerId = stdout;

      if (stderr) {
        console.error('Script errors:');
        console.error(stderr);
      }
    });

    const user = new User({ containerId: containerId, userId: userId })
    await user.save().then(() => console.log('container id saved on database'));

    await delay(10000);

    axios.post('http://localhost:1880/flows',
      JSON.stringify(responseData)
     , {
      headers: {
        'Content-Type': 'application/json',
        "Node-RED-API-Version": "v1"
      }
    }).then((response) => {
      console.log(`flow deployed to container ${containerId}`);
    }).catch((error) => {
      console.log('error deploying flow to container');
      console.log(error);
    })
    
    
    

    // const url = 'http://localhost:1880/flows';
    // const requestData = {
    //   responseData
    // };

    // const requestOptions = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(requestData)
    // };

    // await fetch(url, requestOptions)
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle the response data
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     // Handle errors
    //     console.error('Error:', error);
    //   });





    // if (responseData[0].label === 'Generic Website Flow') {


    //   const apiKey: string = process.env.API_GOOGLE || '';
    //   const genAI = new GoogleGenerativeAI(apiKey);


    //   const guess: string = prompt;

    //   const result: string = await run(genAI, guess);
    //   console.log(result);
    //   const jsonString = JSON.stringify(result);

    //   const strippedJsonString = jsonString.replace('```json', '').replace('```', '');

    //   const strippedJsonObject = JSON.parse(strippedJsonString);




    //   res.send(strippedJsonObject);
    // }
    // else {
    res.status(200).json({
      url: 'http://localhost:1880/',
    });
    // }



  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Generation failed' });
  }
};

async function run(genAI: any, guess: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt: string = `I want you to act as a Node-RED JSON flow file generator for website monitoring. 
  Provide me with a URL, and you will generate a Node-RED JSON flow file for monitoring that website. 
  The flow should include nodes for HTTP request, response handling, and any necessary information to monitor the given website. 
  Do not include explanations, only generate the Node-RED JSON flow file my first website is ${guess},`;

  console.log(prompt);

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
}
