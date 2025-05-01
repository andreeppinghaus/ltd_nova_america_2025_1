import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { API_MESSAGES } from './app.messages';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(API_MESSAGES.SWAGGER.TITLE)
    .setDescription(API_MESSAGES.SWAGGER.DESCRIPTION)
    .setVersion(API_MESSAGES.SWAGGER.VERSION)
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() => {
    console.log(`API iniciou com sucesso.`);
  })
  .catch((error) => {
    console.error('Erro iniciando a API: ', error);
  });
