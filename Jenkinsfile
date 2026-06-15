pipeline {
  agent {
    docker {
      image 'node:20-alpine'
    }
  }

  stages {

    stage('Instalar dependencias') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Correr pruebas') {
      steps {
        sh 'npm test'
      }
    }

  }

  post {
    success {
      echo 'Las pruebas pasaron correctamente'
    }
    failure {
      echo 'Algo fallo, revisa los logs'
    }
  }
}