import { Request, RequestHandler, Response } from "express";
import aws from '@aws-sdk/client-ecs'
// import aws from 'aws-sdk';

// export const launchNodeRedInstance: RequestHandler = async (req: Request, res: Response) => {
//   try {
//     const {
//       awsAccessKeyId,
//       awsSecretAccessKey,
//       awsRegion,
//       awsEcrRepositoryName,
//       awsImageTag,
//       awsClusterName,
//       awsServiceName,
//       awsFamilyName,
//     } = req.body;

//     aws.config.update({
//       accessKeyId: awsAccessKeyId || process.env.AWS_ACCESS_KEY_ID,
//       secretAccessKey: awsSecretAccessKey || process.env.AWS_SECRET_ACCESS_KEY,
//       region: awsRegion || process.env.AWS_REGION,
//     });

//     const ecs = new aws.ECS();

//     // Replace with your ECR repository name and image tag
//     const ecrRepositoryName = awsEcrRepositoryName || process.env.ECR_REPOSITORY_NAME;
//     const imageTag = awsImageTag || process.env.IMAGE_TAG;

//     // Replace with your ECS cluster name and service name
//     const clusterName = awsClusterName || process.env.ECS_CLUSTER_NAME;
//     const serviceName = awsServiceName || process.env.ECS_SERVICE_NAME;

//     // Specify your ECS task definition
//     const taskDefinition = {
//       family: awsFamilyName || process.env.FAMILY_NAME,
//       containerDefinitions: [
//         {
//           name: 'your-container-name',
//           image: `${ecrRepositoryName}:${imageTag}`,
//           essential: true,
//         },
//       ],
//     };

//     // Register the task definition
//     ecs.registerTaskDefinition(taskDefinition, (err, data) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Error registering ECS task definition');
//       } else {
//         const taskDefinitionArn = data.taskDefinition?.taskDefinitionArn;

//         // Update the ECS service with the new task definition
//         const serviceUpdateParams = {
//           cluster: clusterName,
//           service: serviceName,
//           taskDefinition: taskDefinitionArn,
//         };

//         ecs.updateService(serviceUpdateParams, (updateErr, updateData) => {
//           if (updateErr) {
//             console.error(updateErr);
//             res.status(500).send('Error updating ECS service');
//           } else {
//             console.log('ECS service updated successfully');
//             res.status(200).send('ECS task started successfully');
//           }
//         });
//       }
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'failed to launch container' });
//   }
// }


