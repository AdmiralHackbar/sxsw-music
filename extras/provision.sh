# Python Dev
sudo apt-get -y install libxml2-dev libxslt1-dev python-dev
sudo apt-get -y install python-lxml

# Install vim
sudo apt-get -y install vim

# Setup MySQL
echo "Installing MySQL"
sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password password pass'
sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password pass'
sudo apt-get -y install mysql-server
sudo apt-get -y install libmysqlclient-dev

# Setup environmental variables
echo "Setting environmental variables"
sudo cp /usr/local/sxswapp/extras/environment_variables.sh /etc/profile.d/env_var.sh

# Install needed python libraries
echo "Installing python libraries"
sudo apt-get -y install python-pip
sudo pip install -r /usr/local/sxswapp/requirements.always

# Setup Whoosh index dir
sudo apt-get install acl # needed to setup permissions
sudo mkdir -p /var/local/sxsw/index
sudo setfacl -m user:vagrant:rwx /var/local/sxsw/index


## Install Java 7
#sudo apt-get -y install python-software-properties
#sudo add-apt-repository ppa:webupd8team/java -y
#sudo apt-get update
#sudo apt-get -y install oracle-java7-installer
#
## Elasticsearch
#wget -qO - https://packages.elasticsearch.org/GPG-KEY-elasticsearch | sudo apt-key add -
#sudo add-apt-repository "deb http://packages.elasticsearch.org/elasticsearch/1.4/debian stable main"
#sudo apt-get update && sudo apt-get install -y elasticsearch