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
    }
}
