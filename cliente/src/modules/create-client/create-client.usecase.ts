import { prismaClient } from '../../infra/database/prismaClient'
import { kafka } from '../../infra/provider/kafka'
import { KafkaSendMessage } from '../../infra/provider/kafka/producer'

type CreeateClientRequest = {
  name: string,
  password: string,
  email: string,
  document: string,
  phone: string,
}

export class CreateClientUseCase {
  constructor() { }
  
  async execute(data: CreeateClientRequest) {
    console.log("💩  ~ CreateClientUseCase ~ execute ~ data:", data)
    
    const customer = await prismaClient.client.findFirst({
      where: {
        email: data.email
      }
    })


    if (customer) throw new Error('Customer already Exists!')
    const customerCreated = await prismaClient.client.create({
      data: {
        ...data
      }
    })

    const kafkaProducer = new KafkaSendMessage();
    await kafkaProducer.execute('CUSTOMER_CREATED', customerCreated)

    return customerCreated
  }
}