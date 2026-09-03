pipeline {
    agent any

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
