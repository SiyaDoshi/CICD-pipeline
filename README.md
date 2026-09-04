# CICD-pipeline

A Node.js and Express service used to learn CI/CD workflows.

## Run locally

```bash
npm ci
npm start
```

Open http://localhost:3000

## Test

```bash
npm test -- --runInBand
```

## Docker

```bash
docker build -t cicd-pipeline .
docker run --rm -p 3000:3000 cicd-pipeline
```

## Endpoints

- `GET /` - application status message
- `GET /health` - health check

## CI/CD

### Jenkins

The `Jenkinsfile` runs:

1. Install dependencies
2. Run tests
3. Build the Docker image
4. Deploy the container
5. Verify the health endpoint

### GitLab CI

The `.gitlab-ci.yml` runs:

1. Install dependencies
2. Run tests
