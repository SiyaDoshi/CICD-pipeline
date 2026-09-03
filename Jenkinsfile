pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:${env.PATH}"
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm test -- --runInBand'
            }
        }

        stage('Build Docker image') {
            steps {
                sh 'docker build -t cicd-pipeline .'
            }
        }

        stage('Deploy container') {
            steps {
                sh 'docker rm -f cicd-pipeline-app || true'
                sh 'docker run -d --name cicd-pipeline-app -p 3000:3000 cicd-pipeline'
            }
        }
    }
}
