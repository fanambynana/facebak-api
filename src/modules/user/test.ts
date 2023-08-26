/*
import fastify, {FastifyContextConfig} from "fastify";

let fastifyConfig: FastifyContextConfig = {
  trustProxy: true,
  logger: {
    useLevelLabels: true,
    level: "warn"
  }
};

const fastifyApp = fastify(fastifyConfig);

fastifyApp.listen({port: 3000, path: "0.0.0.0"});

import fastifyPlugin from "fastify-plugin";

export default fastifyPlugin( async (fastify, opts, callback ) => {
  fastify.get("/", options, (_, rpl) => {
    rpl.code(200).send("all ok here");
  }); 

  callback();
})
*/