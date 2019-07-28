#   Script para automatizar e facilitar as instalaçôes de dependências
#   e bibliotecas para rodar a apicação da replica-instagram.
#
#   Atenção: Executar o script em modo ROOT. (sudo bash install_script.sh)
#
#   Sistema operacional: Ubuntu 18.04 LTS.


#           PRE-REQUISITOS:

#   1. Instalar o NodeJS versao 10.16.0 LTS:
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
#       Para verificar se o Node foi instalado com sucesso: 
echo "NodeJS Version:"
node -v
echo

#   2. Instalar o Yarn:
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install --no-install-recommends yarn
#       Para verificar a instalação do Yarn:
echo "NodeJS Version:"
yarn --version
echo

