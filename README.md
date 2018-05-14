
# Setup

## Establishing connection
<p>In order to use this application, you must first establish a connection to SDU's network so you can access our blockchain</p>
<p>You can establish a connection to SDU's network through the following steps:<p/>
<ul>
  <li>Download Cisco Anyconnect from https://any.sdu.dk</li>
  <li>Login with SDU username & password</li>
  <li>You are done!</li>
</ul>
  
## Launching the client

```
// Install dependencies and launch the nOS client
$ yarn install && yarn start

// When client has started, go to the WIF tab and login with the following WIF key:
KxDgvEKzgSBPPfuVfw67oPQBSjidEiqTHURKSDL1R7yGaGYAeYnr

```


## Optional
<p>If you don't want to use our current wallet, you can also create your own through the neo-python CLI</p>
<p>If you are running a Windows machine you will have to download putty to establish connection</p>

```
// Establish connection to the server

$ ssh username@ip

// It will ask for password, below is written the password
$ password

// Start the neo-python CLI
$ cd /neo-python
$ source venv/bin/activate
$ np-prompt -p


// Create wallet
$ create wallet %name%

//The CLI will print out the public key of you wallet, use this to export the WIF key used to login to the client
$ export wif %publickey%



```
