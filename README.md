![logo](https://raw.githubusercontent.com/carlosteixeiraa/alberta-pine64/master/graphics/logo.png)



## Alberta for pine64

Alberta is a virtual assistant built with javascript, not nodejs, but soon we will be making a version that runs on nodejs and more fast with a lot of other features.

### Install

To use alberta you just need to clone this repository

```
git clone https://github.com/carlosteixeiraa/alberta-pine64
```

And then run enter in the directory scripts and run the bash file alberta-install.shh

```
cd scripts
```
```
sudo bash alberta-install.sh
```

It will ask for your password..

### How to use after

To use other time after install run the other script called alberta-start.sh

```
bash alberta-start.sh
```

### Access from other computer on network

If you run your pine64 with an ethernet cable connected you can check your local ip on the network and then access it on the computer or mobile you want.

```
ifconfig
```

Also if you want you can make a dns called alberta directing to the pine64 ip or just put http://pine64 on the browser and it should work.

### Change language

Alberta is portuguese, and its the only language for now, if you want feel free to send a pull request with your language!

### Contributions
If you want to change something feel free to do it but don't forget to add your name and what you have done to the CONTRIBUTION.md file.

```json
{
	"username":  "someone",
	"changes":  "foo bar something here xd",
	"github": "https://github.com/someone"
}
```

### Credits
This project is open source, i just wanted to build something free to use and easy to use but that works fine and doesn't look that bad.

### License
MIT
