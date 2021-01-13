import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import * as csruf from 'csurf';
//import * as config from 'config';
import { Logger, Options } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';



async function bootstrap() {
 // const ServerConfig = config.get('server');
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
 // define the options or config settings for swagger document
   const options = new DocumentBuilder()
   .setTitle('Simple Blog Demo')
   .setDescription('Blog Backend With Nestjs')
   .addBearerAuth()
   .addTag('User', 'Post')
   .build();
//setup swagger Module
  const document= SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  //const port = process.env.PORT || ServerConfig.port;
  await app.listen(3000);
  logger.log('App Listening On Port ${port}');
  //app.use(csruf());
}
bootstrap();
