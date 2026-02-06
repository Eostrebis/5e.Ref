data_action = [
    {
        title: "Attaquer",
        icon: "crossed-swords",
        subtitle: "Attaque armée de mêlée ou à distance",
        description: "Réalisez une attaque de mêlée ou à distance avec votre arme",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Certaines compétences, comme l'<i>Attaque Supplémentaire</i> du guerrier, vous permettent de réaliser plus d'une attaque avec cette action. Chacune de ces attaques est un jet séparé et peut cibler une créature différente. Vous pouvez vous déplacer entre ces attaques.",
            "Lorsque vous attaquez avec une arme de mêlée <i>légère</i>, vous pouvez utiliser une action bonus pour attaquer avec votre autre main (voir l'action bonus <i>Attaque Secondaire</i>.",
            "Vous pouvez remplacer l'une de vos attaques de mêlée pour <i>Saisir</i> ou <i>Pousser</i>.",
            "Certaines conditions peuvent conférer l'avantage à l'attaque : les attaques contre les cibles aveuglées, paralysées, pétrifiées, retenues, sonnées ou inconsciente ; les attaques de mêlée contre les cibles au sol ; les attaques réalisées par des attaquants cachés ou invisibles.",
            "Certains conditions peuvent imposer le désavantage à l'attaque : les attaques contre les cibles invisibles ou cachées ; les attaques à distance contre les cibles au sol ; les attaques par un attaquant aveuglé, apeuré, empoisonné ou retenu."
        ]
    },
    {
        title: "Saisir",
        icon: "grab",
        subtitle: "Attaque de mêlée spéciale",
        description: "Essayez de saisir une créature ou de lutter avec elle",
        reference: "PHB, pg. 195.",
        bullets: [
            "Vous pouvez utiliser l'action <i>Attaquer</i> pour réaliser une attaque de mêlée spéciale, une saisie. Si vous êtes capable de réaliser plusieurs attaques avec l'action Attaquer, cette attaque remplace l'une d'entre elles",
            "La cible de votre saisie ne peut pas faire plus d'une taille de plus que vous et elle doit se trouver dans votre portée",
            "En utilisant au moins une main libre, vous pouvez essayer de vous saisir de la cible en réalisant un jet de saisie, un jet de Force (Athlétisme) challengé par un jet de Force (Athlétisme) ou Dextérité (Acrobaties) de la cible (la cible choisit la compétence à utiliser)",
            "Si vous réussissez, la cible subit la condition saisie (sa vitesse tombe à 0)"
        ]
    },
    {
        title: "Pousser",
        icon: "hand",
        subtitle: "Attaque de mêlée spéciale",
        description: "Poussez une créature, pour la faire tomber ou sol ou l'éloigner de vous.",
        reference: "PHB, pg. 195.",
        bullets: [
            "Vous pouvez utiliser l'action <i>Attaquer</i> pour réaliser une attaque de mêlée spéciale et essayer de pousser une créature. Si vous êtes capable de réaliser plusieurs attaques avec l'action Attaquer, cette attaque remplace l'une d'entre elles",
            "La cible de votre poussée ne peut pas faire plus d'une taille de plus que vous et elle doit se trouver dans votre portée",
            "Vous réalisez un jet de Force (Athlétisme) challengé par un jet de Force (Athlétisme) ou Dextérité (Acrobaties) de la cible (la cible choisit la compétence à utiliser)",
            "Si vous remportez le challenge, vous faites tomber la cible au sol ou vous la repousser de 5 ft."
        ]
    },
    {
        title: "Lancer un sort",
        icon: "magic-swirl",
        subtitle: "Temps d'incantation de 1 action",
        description: "Lancez un sort avec un temps d'incantation de 1 action",
        reference: "PHB, pg. 192.",
        bullets: [
            "Vous ne pouvez pas lancer un sort avec votre sort puis un autre sort avec votre action bonus pendant le même tour, sauf si le sort lancé avec votre action est un cantrip.",
            "La cible d'un sort doit se trouver dans la portée du sort. Pour cibler quelque chose, il doit se trouver un chemin clair de vous à ce quelque chose, qui ne peut donc pas se trouver derrière une couverture totale.",
            "Les sorts avec des composantes matérielles ne consomment pas le matériel sauf si cela est clairement indiqué. À l'exception des cas où le coût du matériel est indiqué, vous pouvez supposer que ce coût est nul et que le matériel est toujours disponible dans votre sacoche à composants.",
            "Certains sorts demandent que vous mainteniez la concentration afin de garder leur magie active. Si vous perdez la concentration, un sort la requérant se termine. Vous perdez la concentration sur un sort si vous lancez un autre sort qui demande la concentration ou si vous devenez incapacité. Chaque fois que vous prenez des dégâts, réalisez un jet de sauvegarde pour maintenir votre concentration. Le DD est égal à 10 ou la moitié des dégâts que vous avez subis, en prenant le plus élevé."
        ]
    },
    {
        title: "Foncer",
        icon: "sprint",
        subtitle: "Double la vitesse",
        description: "Obtenez du mouvement supplémentaire pour le tour",
        reference: "PHB, pg. 192.",
        bullets: [
            "L'augmentation est égale à votre vitesse, après application de vos modificateurs."
        ]
    },
    {
        title: "Désengager",
        icon: "journey",
        subtitle: "Empêche les attaques d'opportunité",
        description: "Votre mouvement ne provoque pas d'attaque d'opportunité pendant le reste du tour",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Esquiver",
        icon: "aura",
        subtitle: "Augmente les défenses",
        description: "Vous vous concentrez entièrement sur l'esquive d'attaques",
        reference: "PHB, pg. 192.",
        bullets: [
            "Jusqu'au début de votre prochain, tout jet d'attaque réalisé contre vous a le désavantage si vous pouvez voir l'attaquant, et vous réalisez vos jets de sauvegarde de Dextérité avec l'avantage.",
            "Vous perdez ce bénéfice si vous êtes <i>incapacité</i> ou si votre vitesse tombe à 0"
        ]
    },
    {
        title: "Échapper",
        icon: "manacles",
        subtitle: "Échapper d'une saisie",
        description: "Vous vous échappez d'une saisie",
        reference: "PHB, pg. 195.",
        bullets: [
            "Pour échapper une saisie, vous devez réussir un jet de Force (Athlétisme) ou Dextérité (Acrobaties) challengé par un jet de Force (Athlétisme) du saisisseur.",
            "S'échapper d'autres conditions qui vous retiennent (comme des menottes) peut demander un jet de Dextérité ou de Force, comme spécifié par la condition"
        ]
    },
    {
        title: "Aider",
        icon: "telepathy",
        subtitle: "Conférer l'avantage à un allié",
        description: "Conférez l'avantage à un jet de compétence ou d'attaque d'un allié",
        reference: "PHB, pg. 192.",
        bullets: [
            "La cible gagne l'avantage au prochain jet de compétence qu'elle réalise pour accomplir la tâche pour laquelle vous l'aidez. Pour aider une créature sur un jet de compétence, votre personnage doit maîtriser la compétence ou posséder un score plus élevé que l'aidé dans la caractéristique demandée.",
            "Alternativement, la cible gagne l'avantage à son prochain jet d'attaque contre une créature à 5 ft. de vous.",
            "L'avantage persiste jusqu'au début de votre prochain tour."
        ]
    },
    {
        title: "Utiliser un Objet",
        icon: "snatch",
        subtitle: "Intéragir, utiliser des capacités spéciales",
        description: "Intéragissez avec un second objet ou utilisez les capacités spéciales d'un objet",
        reference: "PHB, pg. 193.",
        bullets: [
            "Vous pouvez intéragir avec un objet gratuitement pendant votre tour (comme dégainer une arme ou ouvrir une porte). Si vous voulez intéragir avec un second objet, utilisez cette action.",
            "Lorsqu'un objet requiert une action pour son utilisation, vous utilisez également cette action."
        ]
    },
    {
        title: "Utiliser un Bouclier",
        icon: "round-shield",
        subtitle: "Équiper ou déséquiper un bouclier.",
        description: "Équipez ou déséquipez un bouclier.",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "Un bouclier prend toujours une action pour être équipé ou déséquipé.",
            "Une armure demande plusieurs minutes pour être équipée ou déséquipée"
        ]
    },
    {
        title: "Se Cacher",
        icon: "hood",
        subtitle: "",
        description: "Essayez de vous cacher",
        reference: "PHB, pg. 192.",
        bullets: [
            "Vous ne pouvez pas vous cacher d'une créature qui peut vous voir. Vous devez avoir une couverture totale, être dans une zone fortement obscurée, être invisible ou bloquer d'une autre façon la vision de l'ennemi.",
            "Si vous réalisez du bruit (comme crier un avertissement ou faire tomber un vase), vous révélez votre position.",
            "Lorsque vous essayez de vous cachez, réalisez un jet de Dextérité (Discrétion) et notez le résultat. Jusqu'à ce que vous soyez découvert ou que vous arrêtiez de vous cacher, le résultat noté est challengé par les jets de Sagesse (Perception) des créatures qui cherchent activement les indices de votre présences.",
            "Une créature vous remarque même si elle ne vous cherche pas si votre jet de Discrétion est inférieur à sa Perception Passive.",
            "En dehors de combat, vous pouvez également utiliser un jet de Dextérité (Discrétion) pour vous dissimuler des ennemis, vous faufiler derrière des gardes, vous échapper discrètement ou encore vous approcher derrière quelqu'un sans être vu ou entendu."
        ]
    },
    {
        title: "Chercher",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Dévouez toute votre attention à la recherche de quelque chose.",
        reference: "PHB, pg. 193.",
        bullets: [
            "En fonction de ce que vous cherchez, le MJ peut vous faire faire un jet de Sagesse (Perception) ou d'Intelligence (Investigation)."
        ]
    },
    {
        title: "Se tenir prêt",
        icon: "stopwatch",
        subtitle: "Choisir un déclencheur et une action",
        description: "Choisissez un déclencheur et la réaction de réponse",
        reference: "PHB, pg. 193.",
        bullets: [
            "Premièrement, vous décidez les circonstances perceptibles qui déclenchent votre réaction",
            "Ensuite, vous choisissez l'action que vous prenez en réponse au déclencheur, ou vous choisissez où vous déplacer en réponse (au maximum de votre vitesse de déplacement).",
            "Lorsque le déclencheur se déclenche, vous prendre votre réaction juste après ou l'ignorer.",
            "Lorsque vous préparez un sort, vous le lancez normalement mais gardez son énergie, que vous libérez lorsque le déclencheur se déclenche. Pour être préparé, un sort doit avoir un temps d'incantation de 1 action, et maintenir la magie du sort vous demande la concentration.",
        ]
    },
    {
        title: "Utiliser une aptitude de classe",
        icon: "embrassed-energy",
        subtitle: "Certaines aptitudes demandent une action",
        description: "Utilisez une aptitude de race ou de classe qui demande une action",
        reference: "--",
        bullets: [

        ]
    },
    {
        title: "Stabiliser une créature",
        icon: "first-aid",
        subtitle: "Administrer des soins à une créature",
        description: "Stabilisez une créature pour qu'elle n'ait plus à réaliser de jet de sauvegarde contre la mort",
        reference: "PHB, pg. 197.",
        bullets: [
            "Réalisez un jet de Sagesse (Médecine) DD 10.",
            "Si vous réussissez, la créature est stabilisée et n'a plus besoin de réaliser des jets de sauvegarde contre la mort.",
            "Une créature stable regagne 1 point de vie après 1d4 heures."
        ]
    },
    {
        title: "Improviser",
        icon: "juggler",
        subtitle: "N'importe quelle action pas sur cette liste",
        description: "Réalisez n'importe quelle action que vous pouvez imaginer",
        reference: "PHB, pg. 193.",
        bullets: [
            "Lorsque vous décrivez une action qui n'est pas détaillé dans les règles, le MJ vous indique si l'action est possible et les jets à réaliser, le cas échéant, pour déterminer le succès ou non de l'action."
        ]
    }
]
