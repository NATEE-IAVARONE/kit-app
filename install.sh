git config --global --add safe.directory '*'

npm i -g cross-env
npm i

git submodule update --init

npm i --prefix ./shells/sveltkit-electron

sudo dpkg --add-architecture i386
sudo apt update
sudo apt install -y wine64 wine32 libnss3-dev libatk1.0-0 libatk-bridge2.0-0 libgdk-pixbuf2.0-0 libgtk-3-0
