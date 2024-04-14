# centrer des élément dans une box flex

![alt text](image-1.png)

````
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box div {
  width: 100px;
  height: 100px;
}

````
* **justify-content => axe principale _horizontal_(cas 0)**

* **align-item: center => axe secondaire _verticale_ (cas 0)**

# overflow

**overflow = débordement (dépassement)**

 Un dépassement correspond à ce qui se produit lorsqu'il y a trop de contenu dans une boîte et que ce contenu ne s'y intègre pas confortablement

 ex :

 ![alt text](image-2.png)

 le contenu > conteneur

 Dans la mesure du possible, le CSS ne masque pas votre contenu ; le faire entraînerait des pertes de données, ce qui pose généralement problème

 le fait de restreindre les dimension avec width ou height augmente les risque de débordements.

 La propriété **overflow** est la façon dont vous prenez le contrôle du débordement d'un élément et dîtes au navigateur comment vous voulez qu'il se comporte. La valeur par défaut est **visible**, c'est pourquoi, par défaut, nous pouvons voir notre contenu quand il déborde.

vous pouvez mettre ``hidden`` pour obtenir ceci :
![alt text](image-3.png)

``overflow: scroll;`` pour faire apparaître une barre de défilemenent 

![alt text](image-4.png)

``overflow-x`` pour défiler sur l'axe x. 

à poursuivre...

# font-size




