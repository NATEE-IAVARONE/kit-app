git config --global --add safe.directory '*'

npm i

git submodule update --init

npm i --prefix ./shells/sveltkit-electron

sudo dpkg --add-architecture i386
sudo apt update
sudo apt install -y wine64 wine32 libnss3
