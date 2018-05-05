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

### Pine64

[Website](https://www.pine64.org) 

[Wiki](http://wiki.pine64.org/index.php/Main_Page) 

### Recommended OS
The OS that i advise you to use is any Ubuntu based one, as it was developed and tested on it. DietPi is a great choise too as it is lightweight and enough to run alberta.

[OS for pine64](http://wiki.pine64.org/index.php/Pine_A64_Software_Release) 

### Commands

As i said above currently Alberta is only portuguese so the commands are in portuguese too, but when new langs are added i will change the commands to english too.

<li><b>Play music</b> - Alberta toca PARAM</li>
<li><b>Search in google</b> - Alberta procura PARAM</li>
<li><b>Open Pages</b>- Alberta abre PARAM</li>
<li><b>Search on google maps</b> - Alberta onde PARAM</li>
<li><b>Play piano</b>- Alberta toca PARAM</li>
<li><b>Say phrases</b> - Alberta diz PARAM</li>
<li><b>Goes to dominos pizza website</b> - Alberta quero/preciso de pizza</li>
<li><b>Open movie website</b> - Alberta quero/preciso de ver um filme</li>
<li><b>Open movie website in a certain genre</b> - Alberta quero/preciso de ver um filme de Comedia/Terror/Ação</li>
<li><b>More to come...</b></li>

### Credits
This project is open source, i just wanted to build something free to use and easy to use but that works fine and doesn't look that bad.

### License
MIT