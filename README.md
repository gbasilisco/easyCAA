# Welcome to easyCAA

The project is a free interpretation of **AraSuite** platform, in particular of [AraWord](http://sourceforge.net/projects/araword/files/?source=navbar) tool. **AraWord** works in client mode, **easyCCA** is a open&free software web-based. 

This is an attempt to build an easy platform to serve the teachers to use the CAA (**Augmentative and Alternative Communication**).

Moreover **easyCCA** can works on very basic OS like Windows RT. 

You can download the directory of project and, with a double-click on `index.html` file, run the **easyCCA** to your web browser.

**easyCCA** can run on any webserver or offline.

# Files

 - `index.html` is the main of **easyCCA**
 - in the folder `IT_simboli_arasaac_colori` there are the pictograms from **AraWord** projects. easyCCA uses pictograms from ARASAAC, owned by Aragón Government, distributed under a Creative Commons license (BY-NC-SA).
 - `js/imagesEasyDB.js` is the configuration file to associate the words vs pictograms. This file comes from **AraWord** projects in details from `imagesEasy.xml` file 
 - `js/config.js` is the configuration of the application. You can set language from Castellano, Ingles, Frances, Catalan, Italiano, Aleman, Portugues, Portugues Brasil, Gallego, Euskera. **Default is Italiano**
 - `js/easyCAAcore.js` is the core of the application.

# How to you use

### offline

 1. download **easyCCA** from github
     `git clone https://github.com/gbasilisco/easyCAA.git` or download  directly from `https://github.com/gbasilisco/easyCAA/archive/master.zip`
 2. open directory `easyCCA`, or unzip zip file downloaded, and double click on `index.html` file 
 3. write in the field the words and see the associate pictograms

### on your webserver

 1. download **easyCCA** from github
     `git clone https://github.com/gbasilisco/easyCAA.git` or download  directly from `https://github.com/gbasilisco/easyCAA/archive/master.zip`
 2. copy directory `easyCCA` into your webroot (e.g. on apache `htdocs`)
 3. open your browser and access to root URL (e.g http://localhost:8080/easyCCA) and go to `index.html` page
 4. write in the field the words and see the associate pictograms
 
### online

 1. open your browser go to http://....... (working in progress)
 2. write in the field the words and see the associate pictograms

# General Informations

### Technology

Built with pure HTML and JQuery-1.12.4

### How can I contribute?

In the  [Issue](https://github.com/gbasilisco/easyCAA/issues)  section of this repository I constantly add bugs to fix or new features to develop. You can fork this repository and start develop as a contributor.
Moreover you can send an email to info@softnew.it to collaborate.

In particular if do you want add new pictograms and new words, you have to modify the `imagesEasyDB.js` and add new images into `IT_simboli_arasaac_colori`

This is an item's example:

    <image id="2256.png" name="2256.png">
            <language id="Castellano">
                <word type="nombreComun">rbol</word>
            </language>
            <language id="Ingles">
                <word type="nombreComun">tree</word>
            </language>
            <language id="Frances">
                <word type="nombreComun">arbre</word>
            </language>
            <language id="Catalan">
                <word type="nombreComun">arbre</word>
            </language>
            <language id="Italiano">
                <word type="nombreComun">albero</word>
            </language>
            <language id="Aleman">
                <word type="nombreComun">Baum</word>
            </language>
            <language id="Portugues">
                <word type="nombreComun">rvore</word>
            </language>
            <language id="Portugues Brasil">
                <word type="nombreComun">rvore</word>
            </language>
            <language id="Gallego">
                <word type="nombreComun">rbore</word>
            </language>
            <language id="Euskera">
                <word type="nombreComun">zuhaitz</word>
            </language>
        </image>

### License

This project is released under GNU GPL license as you can check in LICENSE.txt file.
The images stored in `IT_simboli_arasaac_colori` directory, are under Creative Commons license (BY-NC-SA) as you can check in legalcode.txt file.