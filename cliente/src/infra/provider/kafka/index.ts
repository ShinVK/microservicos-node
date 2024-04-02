import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['endless-anteater-9113-us1-kafka.upstash.io:9092'],
  ssl: true,
  sasl: {
      mechanism: 'scram-sha-256',
      username: 'ZW5kbGVzcy1hbnRlYXRlci05MTEzJPiIACtB79QTOBFT31kO1G2GUkDJYrcjXB8',
      password: 'NTQwYzY4ZWMtMWMyMi00ZWMwLWI5OGItODk5MzI3ZGRkNTQ4'
  },
  logLevel: logLevel.ERROR,
});

// const producer = kafka.producer();

// const run = async () => {
//   await producer.connect();

//   await producer.send({
//       topic: 'YOUR_TOPIC',
//       messages: [
//       { value: 'Hello Kafka!' },
//       ],
//   });

//   console.log("Message sent successfully");
//   await producer.disconnect();
// };

// run().catch(e => console.error('[example/producer] e.message', e));

export { kafka };