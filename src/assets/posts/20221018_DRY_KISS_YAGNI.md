---
title: "Les principes DRY, KISS et YAGNI"
date: "2022-10-18"
category: "DATABASE"
slug: "dry-kiss-yagni"
illustration: "../images/posts/post_cards/solid.png"
---

Tout comme [les principes SOLID](https://celineung.github.com/blog/principes-solid),
DRY, KISS et YAGNI sont des acronymes utilisés par les développeurs pour désigner des standards de développement.

## DRY

DRY pour **Don't Repeat Yourself**

Ce principe invite les développeurs à factoriser un code similaire utiliser à plusieurs endroits.
Cela permet de faciliter la compréhension du code et d'éviter de générer des erreurs ou incohérences.

Prenons pour exemple le cas d'un site de e-commerce:
- une offre de vente d'un produit affiche un prix qui tient compte des taxes et des réductions promotionnelles
- un élément du panier affiche lui aussi un prix qui tient compte des taxes et des réductions promotionnelles

Pour respecter DRY: plutôt que de dupliquer la logique de calcul de prix dans chacun de ces cas, il serait plus judicieux de
centraliser le calcul dans un service.
  
Que se passe-t-il si le principe DRY n'est pas respecté ?  
Imaginons que le prix affiché doive désormais tenir compte d'un autre paramètre. Le développeur - nouveau sur ce périmètre fonctionnel - pourrait ne modifier
que le prix de l'offre, et ignorer qu'il faille aussi modifier le prix de l'élément panier.
Une centralisation de la logique de calcul de prix aurait éviter cet oubli.

## KISS

KISS pour "Keep It Simple, Stupid"  
