// import * as utils from '../lib/utils';
import React from 'react';
import ReactCanvas from 'react-canvas';
import { $ } from '../lib/dom';

var Surface = ReactCanvas.Surface;
var Group = ReactCanvas.Group;
var Image = ReactCanvas.Image;
var Text = ReactCanvas.Text;
var FontFace = ReactCanvas.FontFace;
var ListView = ReactCanvas.ListView;

const CANVAS_WIDTH = '100vw';
const CANVAS_HEIGHT = '100vh';
const CANVAS_BACKGROUND_COLOR = 'hsl(0, 0%, 95%)';

let Game = React.createClass({
    'render': function() {
        return (
            <h1>Jump for Joy</h1>
        );
    }
});

let App;

App = React.createClass({

  componentDidMount: function () {
    window.addEventListener('resize', this.handleResize, true);
  },

  render: function () {
    var size = this.getSize();
    return (
      <Surface top={0} left={0} width={size.width} height={size.height} enableCSSLayout={true}>
        <Group style={this.getPageStyle()}>
          <Text style={this.getTitleStyle()}>
            Professor PuddinPop
          </Text>
          <Group style={this.getImageGroupStyle()}>
            <Image src='http://lorempixel.com/360/420/cats/1/' style={this.getImageStyle()} fadeIn={true} />
          </Group>
          <Text style={this.getExcerptStyle()}>
            With these words the Witch fell down in a brown, melted, shapeless mass and began to spread over the clean boards of the kitchen floor.  Seeing that she had really melted away to nothing, Dorothy drew another bucket of water and threw it over the mess.  She then swept it all out the door.  After picking out the silver shoe, which was all that was left of the old woman, she cleaned and dried it with a cloth, and put it on her foot again.  Then, being at last free to do as she chose, she ran out to the courtyard to tell the Lion that the Wicked Witch of the West had come to an end, and that they were no longer prisoners in a strange land.
          </Text>
        </Group>
      </Surface>
    );
  },

  // Styles
  // ======

  getSize: function () {
    return document.getElementById('canvas').getBoundingClientRect();
  },

  getPageStyle: function () {
    var size = this.getSize();
    return {
      position: 'relative',
      padding: 14,
      width: size.width,
      height: size.height,
      backgroundColor: '#f7f7f7',
      flexDirection: 'column'
    };
  },

  getImageGroupStyle: function () {
    return {
      position: 'relative',
      flex: 1,
      backgroundColor: '#eee'
    };
  },

  getImageStyle: function () {
    return {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
  },

  getTitleStyle: function () {
    return {
      fontFace: FontFace('Georgia'),
      fontSize: 22,
      lineHeight: 28,
      height: 28,
      marginBottom: 10,
      color: '#333',
      textAlign: 'center'
    };
  },

  getExcerptStyle: function () {
    return {
      fontFace: FontFace('Georgia'),
      fontSize: 17,
      lineHeight: 25,
      marginTop: 15,
      flex: 1,
      color: '#333'
    };
  },

  // Events
  // ======

  handleResize: function () {
    this.forceUpdate();
  }

});


var articles = [
  {
    title: 'Tim',
    excerpt: 'With these words the Witch fell down in a brown, melted, shapeless mass and began to spread over the clean boards of the kitchen floor.  Seeing that she had really melted away to nothing, Dorothy drew another bucket of water and threw it over the mess.  She then swept it all out the door.  After picking out the silver shoe, which was all that was left of the old woman, she cleaned and dried it with a cloth, and put it on her foot again.  Then, being at last free to do as she chose, she ran out to the courtyard to tell the Lion that the Wicked Witch of the West had come to an end, and that they were no longer prisoners in a strange land.',
    imageUrl: 'http://lorempixel.com/360/420/cats/1/'
  },
  {
    title: 'Bart',
    excerpt: 'The splendid fellow sprang to his feet, and grasping me by the shoulder raised his sword on high, exclaiming: "And had the choice been left to me I could not have chosen a more fitting mate for the first princess of Barsoom.  Here is my hand upon your shoulder, John Carter, and my word that Sab Than shall go out at the point of my sword for the sake of my love for Helium, for Dejah Thoris, and for you.  This very night I shall try to reach his quarters in the palace." "How?" I asked.  "You are strongly guarded and a quadruple force patrols the sky." He bent his head in thought a moment, then raised it with an air of confidence.',
    imageUrl: 'http://lorempixel.com/360/420/cats/2/'
  },
  {
    title: 'Ben',
    excerpt: 'For a minute he scarcely realised what this meant, and, although the heat was excessive, he clambered down into the pit close to the bulk to see the Thing more clearly.  He fancied even then that the cooling of the body might account for this, but what disturbed that idea was the fact that the ash was falling only from the end of the cylinder. And then he perceived that, very slowly, the circular top of the cylinder was rotating on its body.  It was such a gradual movement that he discovered it only through noticing that a black mark that had been near him five minutes ago was now at the other side of the circumference.',
    imageUrl: 'http://lorempixel.com/360/420/cats/3/'
  },
  {
    title: 'Thijs',
    excerpt: 'My wife was curiously silent throughout the drive, and seemed oppressed with forebodings of evil.  I talked to her reassuringly, pointing out that the Martians were tied to the Pit by sheer heaviness, and at the utmost could but crawl a little out of it; but she answered only in monosyllables.  Had it not been for my promise to the innkeeper, she would, I think, have urged me to stay in Leatherhead that night.  Would that I had!  Her face, I remember, was very white as we parted. For my own part, I had been feverishly excited all day.',
    imageUrl: 'http://lorempixel.com/360/420/cats/4/'
  },
  {
    title: 'Susanne',
    excerpt: 'Passepartout heard the street door shut once; it was his new master going out.  He heard it shut again; it was his predecessor, James Forster, departing in his turn.  Passepartout remained alone in the house in Saville Row. "Faith," muttered Passepartout, somewhat flurried, "I\'ve seen people at Madame Tussaud\'s as lively as my new master!" Madame Tussaud\'s "people," let it be said, are of wax, and are much visited in London; speech is all that is wanting to make them human. During his brief interview with Mr. Fogg, Passepartout had been carefully observing him.',
    imageUrl: 'http://lorempixel.com/360/420/cats/5/'
  },
  {
    title: 'Grote Ben',
    excerpt: 'On March 3, 1866, Powell and I packed his provisions on two of our burros, and bidding me good-bye he mounted his horse, and started down the mountainside toward the valley, across which led the first stage of his journey. The morning of Powell\'s departure was, like nearly all Arizona mornings, clear and beautiful; I could see him and his little pack animals picking their way down the mountainside toward the valley, and all during the morning I would catch occasional glimpses of them as they topped a hog back or came out upon a level plateau.',
    imageUrl: 'http://lorempixel.com/360/420/cats/6/'
  },
  {
    title: 'Hilde',
    excerpt: 'So powerfully did the whole grim aspect of Ahab affect me, and the livid brand which streaked it, that for the first few moments I hardly noted that not a little of this overbearing grimness was owing to the barbaric white leg upon which he partly stood. It had previously come to me that this ivory leg had at sea been fashioned from the polished bone of the sperm whale\'s jaw. "Aye, he was dismasted off Japan," said the old Gay-Head Indian once; "but like his dismasted craft, he shipped another mast without coming home for it.',
    imageUrl: 'http://lorempixel.com/360/420/cats/7/'
  },
  {
    title: 'Shan',
    excerpt: 'Again was I suddenly recalled to my immediate surroundings by a repetition of the weird moan from the depths of the cave.  Naked and unarmed as I was, I had no desire to face the unseen thing which menaced me. My revolvers were strapped to my lifeless body which, for some unfathomable reason, I could not bring myself to touch.  My carbine was in its boot, strapped to my saddle, and as my horse had wandered off I was left without means of defense.  My only alternative seemed to lie in flight and my decision was crystallized by a recurrence of the rustling sound.',
    imageUrl: 'http://lorempixel.com/360/420/cats/8/'
  },
  {
    title: 'Niels',
    excerpt: 'First they came to a great hall in which were many ladies and gentlemen of the court, all dressed in rich costumes.  These people had nothing to do but talk to each other, but they always came to wait outside the Throne Room every morning, although they were never permitted to see Oz.  As Dorothy entered they looked at her curiously, and one of them whispered: "Are you really going to look upon the face of Oz the Terrible?" "Of course," answered the girl, "if he will see me." "Oh, he will see you," said the soldier who had taken her message to the Wizard.',
    imageUrl: 'http://lorempixel.com/360/420/cats/9/'
  },
  {
    title: 'Sjoerd',
    excerpt: 'At once, with a quick mental leap, he linked the Thing with the flash upon Mars. The thought of the confined creature was so dreadful to him that he forgot the heat and went forward to the cylinder to help turn.  But luckily the dull radiation arrested him before he could burn his hands on the still-glowing metal.  At that he stood irresolute for a moment, then turned, scrambled out of the pit, and set off running wildly into Woking.  The time then must have been somewhere about six o\'clock. He met a waggoner and tried to make him understand, but the tale he told and his appearance were so wild--his hat had fallen off in the pit--that the man simply drove on.',
    imageUrl: 'http://lorempixel.com/360/420/cats/10/'
  },
];

var Item = React.createClass({

  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    imageUrl: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    itemIndex: React.PropTypes.number.isRequired,
  },

  statics: {
    getItemHeight: function () {
      return 80;
    }
  },

  render: function () {
    return (
      <Group style={this.getStyle()}>
        <Image style={this.getImageStyle()} src={this.props.imageUrl} />
        <Text style={this.getTitleStyle()}>{this.props.title}</Text>
      </Group>
    );
  },

  getStyle: function () {
    return {
      width: this.props.width,
      height: Item.getItemHeight(),
      backgroundColor: (this.props.itemIndex % 2) ? '#eee' : '#a5d2ee'
    };
  },

  getImageStyle: function () {
    return {
      top: 10,
      left: 10,
      width: 60,
      height: 60,
      backgroundColor: '#ddd',
      borderColor: '#999',
      borderWidth: 1
    };
  },

  getTitleStyle: function () {
    return {
      top: 32,
      left: 80,
      width: this.props.width - 90,
      height: 18,
      fontSize: 14,
      lineHeight: 18
    };
  }

});


App = React.createClass({

  render: function () {
    var size = this.getSize();
    return (
      <Surface top={0} left={0} width={size.width} height={size.height}>
        <ListView
          style={this.getListViewStyle()}
          numberOfItemsGetter={this.getNumberOfItems}
          itemHeightGetter={Item.getItemHeight}
          itemGetter={this.renderItem} />
      </Surface>
    );
  },

  renderItem: function (itemIndex, scrollTop) {
    var article = articles[itemIndex % articles.length];
      return (
      <Item
        width={this.getSize().width}
        height={Item.getItemHeight()}
        imageUrl={article.imageUrl}
        title={article.title}
        itemIndex={itemIndex} />
    );
  },

  getSize: function () {
    return document.getElementById('canvas').getBoundingClientRect();
  },

  // ListView
  // ========

  getListViewStyle: function () {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },

  getNumberOfItems: function () {
    return 10 * 1000;
  },

});


function init() {
    $('#canvas')[0].style.width = CANVAS_WIDTH;
    $('#canvas')[0].style.height = CANVAS_HEIGHT;
    $('#canvas')[0].style.backgroundColor = CANVAS_BACKGROUND_COLOR;

    React.render(<App />, document.getElementById('canvas'));
}

init();
