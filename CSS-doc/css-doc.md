# CSS Style 

### _le CSS (Cascading Style Sheets) permet d'indiquer au navigateur comment notre HTML doit çetre affiché._ 

**CSS contient plusieur règle => composé de deux partie :**
* Le sélécteur => permet d'identifier le(s) élément(s) de la page
* Le bloc de déclaration => contient des propriétés et valeurs

**ex :**

````
p {
    font-size: 20px;    
} 
````
* _``p`` => sélécteur : celui de ``<p>``_
* _``font-size: 20px;`` => bloc de déclaration_


_Un sélécteur peu cibler plusieurs élément :_

**ex :**

````
p, a {
    font-size: 20ps;
}
````
_la virgule ``,`` => &_

* _à noter que les règle se termine par un ``;``

## Histoire du CSS (bref)

_le CSS est né de l'envie de styliser les page html_

## intégrer le CSS dans HTML

* **avec une balise ``<link>``: contient un attribut ``href`` qui pointe vers le fichier CSS et un type (pour le navigateur) ``rel``**

**ex :**

````
<link rel="stylesheet" type="text/css" href="myfile.css">

````
_C'est le meilleur moyen d'intégrer du CSS dans HTML (plus propre / moins lourd)_

* **Vous pouvez aussi le faire directement avec la balise Style, _avant la balise ``<body>``_**

**ex :**

````
<style>
...Votre CSS...
</style>
````
* **Vous pouvez ajouter un attribut à n’importe quelle balise HTML et y ajouter du CSS.style**

**ex :**

````
<div style="background-color: yellow">...</div>
````

## Les sélécteurs

_Permet d'associer les **déclaration** au **éléments de la page.**

### Les sélécteur de bases

* **Chaque balises HTML à un sélécteur**

* ``<p>`` => ``p``
* ``<div>`` => ``div``
* ``<span>`` => ``span``   
* ``<body>`` => ``body``
* ``<img>`` => ``img``
* **. . .**

_bien entendu si votre sélécteur correspond à plusieurs éléments, ils seront tous modifié. D'ou l'intérêt des sélécteur de ``class``_ et ``id``.

### Sélécteur: _class_ et _id_

* **``id`` ne marche que pour un élément (une seul fois)**

    chaque ``id`` sera unique

* **``class`` peut en séléctionner plusieurs**

   Les éléments avec le même nom de ``class`` seront modifé.

## id 

_on utilisera ``#`` pour déclarer l'élément dans **CSS**_

**HTML :**
````
<p id="name">
  Jordan
</p>
````
**CSS :**

````
#name {
  color: yellow;
}
````

## class

_on utilisera ``.`` pour déclarer l'élément dans **CSS**_

**HTML :**
````
<p class="famille">
  Belfort
</p>
````
**CSS :**

````
.famille {
  color: red;
}
````

## Combiner les sélécteurs

### Avec des éléments 

Il est possible de cibler une **classe** ou **id** en ajoutant l'élément dans lequel il se trouve.

**ex class :**

````
<p class="famille">
  Belfort
</p>

p.famille {
  color: yellow;
}
````
**Ici, nous avons combiné ``p`` et la class ``famille`` :**

* **_sans espace_**

**ex id :**

````
<p id="name">
  Jordan
</p>

p#name {
  color: yellow;
}
````
**Ici, nous avons combiné ``p`` et l'id ``name`` :**

* **_sans espace_**

### Ciblage avec plusieurs classe / id

_le principe reste le même_

**ex :**

````
<p class="famille nationalitée">   
  Belfort
</p>

.famille.nationalitée {
  color: yellow;
}
````
* Ici, Nous avans renseigné 2 class dans **html** ``famille nationalitée`` (avec un espace)
* dans le **CSS** (sans espace)

_idem pour combiner une **classe** et un **id**_

**ex :**

````
<p class="famille nationalitée">   
  Belfort
</p>

.famille.nationalitée {
  color: yellow;
}
````

### Sélécteur de groupe

Pour appliquer à plusieurs les mêmedéclarations à plusieurs sélécteur, on utilisera ``,``

**ex :**

````
<p>
  his name is:
</p>
<span class="name">
  Jordan
</span>

p, .name {
  color: yellow;
}

````

**plus claire :**

````
p,
.name {
  color: yellow;
}

````

### Sélécteur spécifique (arborescence)

En suivant l'arborescence du document vous pouvez cibler une balise imbriqué dans une autre. **Sans modifier la balise contenante.**

**ex :**

````
<span>
  Hello!
</span>
<p>
  My name is:
  <span class="name">
    Jordan
    Jordyn
    Jorge
  </span>
</p>

p span {
  color: yellow;
}
````

_Nous avons 2 balise ``<span>`` mais c'est la balise ``<span>`` contenu dans ``<p>`` qui sera modifiée (même si elle contient plusieurs élément => child)._

Pour cela on utilise un **espace** dans **CSS.** Ou, pour être plus stricte : un ``>``

#### appliquer à ``First-child``

**ex :**
````
p > span {
  color: yellow;
}
````
_Dans ce cas là, la modification sera apporté uniquement à ``first-child`` => **"Jordan".**

#### appliquer à ``children``

````
<p>
  <span>
    This is yellow
  </span>
  <strong>
    <span>
      This is not yellow
    </span>
  </strong>
</p>
````

En utilisant l'opérateur ``+`` on peut styliser les éléments (ex : ``<span>``) qui succède une balise (comme ``<p>``).

**ex :**

````
p + span {
  color: yellow;
}
````

## Cascade

### Définition

**La cascade : Processue / algorithme qui détermine les propriétée appliqué à chaque élément de la page en suivant des règles bien précise.**

### 4 points important :
* **Spécificitée**
* **Importance**
* **Héritage (inheritance)**
* **Ordre dans le fichier**

Cela permet de résoudre les conflit pour une même propriété => laquelle doit être modifiée.

N'oubliez pas que le navigateur que vous utilisé à ces propre règles CSS => font parti du processus.

### les spécificitée

_"La règle la plus spécifique l'emporte toujours"_

Nous verrons cela par ordre décroissant (**du moins spécifique au plus spécifique**)

* **Slot 1**

comprend les balise de bases :

````
p {}                    /* 0 0 0 1 */
span {}                 /* 0 0 0 1 */
````

En combinant on est plus spécifique
````
p span {}               /* 0 0 0 2 */
p > span {}             /* 0 0 0 2 */
div p > span {}

````
* **Slot 2**

comprend :
* les sélécteur de classe
* les sélécteur de pseudo-classe
* les sélécteur d'attribut

````
.name {}                 /* 0 0 1 0 */
.users .name {}          /* 0 0 2 0 */
[href$='.pdf'] {}        /* 0 0 1 0 */
:hover {}                /* 0 0 1 0 */
````
Si vous combiné avec du niveau 1 :

````
div .name {}             /* 0 0 1 1 */
a[href$='.pdf'] {}       /* 0 0 1 1 */
.pictures img:hover {}   /* 0 0 2 1 */
````

* **Slot 3**

comprend  ``id`` 

````
#name {}                   /* 0 1 0 0 */
.user #name {}             /* 0 1 1 0 */
#name span {}              /* 0 1 0 1 */

````

* **Slot 4**

comprend les styles en ligne (directement intégré dans le HTML)


``<p style="color: red">Test</p> /* 1 0 0 0 */``

### IMPORTANCE !

Si vous mettez l'attribut ``!important``
la règle sera au sommet de la **Specificité**  (préséance sur toute les autres règle) 

````
p {
  font-size: 20px!important;
}
````
cette attribut n'est pas éssentiel donc...

**! on peu s'en passer**

### Héritage

























