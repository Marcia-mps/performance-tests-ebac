import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<1000'],
  },
};

export default function () {
  const response = http.get('http://localhost:3000/api/products');

  check(response, {
    'endpoint respondeu': (res) => res.status === 200 || res.status === 401,
    'tempo < 1000ms': (res) => res.timings.duration < 1000,
  });

  sleep(1);
}