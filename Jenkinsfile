pipeline {
    agent any

    environment {
        PATH+NODE = '/usr/local/bin'
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
    }
}
