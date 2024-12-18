import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //O NestFactory é uma classe que fornece métodos estáticos para criar instâncias de aplicativos Nest
  app.useGlobalPipes(new ValidationPipe()); //O método useGlobalPipes() é um método que permite que você aplique um pipe globalmente em seu aplicativo. Já o new ValidationPipe() é um pipe de validação que é fornecido pelo pacote @nestjs/common. Ele é usado para validar os dados de entrada de uma solicitação.
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
