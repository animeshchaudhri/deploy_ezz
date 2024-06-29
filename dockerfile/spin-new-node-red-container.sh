#!/bin/bash
# docker run 6e51a6fb2587ce12f8e25fc027a5787c28086530b24e147e9893fea129ff6770 -p 1880:1880
# docker run -d -p $1:1880 node-red-image
docker run -d -p 1880:1880 6e51a6fb2587ce12f8e25fc027a5787c28086530b24e147e9893fea129ff6770
# echo $1