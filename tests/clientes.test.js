import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<1000'],
    http_req_failed: ['rate<0.05'],
  },
};

export default function () {
  const response = http.get('http://localhost:3000/clientes');

  check(response, {
    'status é 200': (res) => res.status === 200,
    'tempo < 1000ms': (res) => res.timings.duration < 1000,
  });

  sleep(1);
}