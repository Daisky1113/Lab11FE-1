import users from './users.js'

export class BlogFactory {
  constructor(props) {
    this.users = props.users
    this.blogLength = props.blogLength
    this.blogLengthSurplus = props.surplus
    this.maxLikeCount = props.maxLikeCount

    this.nouns = ['哺乳類', '爬虫類', '鳥類', '両生類', '魚類', '貝類', '昆虫', '真正細菌', '古細菌', '真核生物',]

    this.particles = ["が", "と", "は", "それは", "だが", 'こそ', 'でさえ', 'も']
    
    this.verbs = ["休む", "踊る", "泣く", "行く", "来る", "着く", "歩く", "過ぎる", "登る", "飾る", "見つめる", "待つ", "読む", "降る", "試みる", "見える", "迎える", "脱出する", "揺れる", "歌う", "飲む", "食べる", "騙す", "起きる", "咲く", "終わる", "誘う", "降りる", "泳ぐ"]
  }

  _getRandomWord(type) {
    return this[type][Math.floor(Math.random() * this[type].length)]
  }

  _getRandomTitle() {
    return ['nouns', 'particles', 'verbs'].map(word => this._getRandomWord(word))
  }

  _getRandomLikeCount() {
    return Math.floor(Math.random() * this.maxLikeCount)
  }

  _createBlog(id) {
    const tags = this._getRandomTitle()
    const title = tags.slice().join('')

    return {
      id,
      likeCount: this._getRandomLikeCount(),
      published: Math.random() > 0.3 ? true : false,
      title: title,
      tags: [tags[0], tags[2]],
      comments: []
    }
  }

  _getRandomBlogCount() {
    return Math.ceil(Math.random() * this.blogLengthSurplus + this.blogLength)
  }

  createBlogedUsers() {
    this.blogedUsers = this.users.map(user => {
      const blogCount = this._getRandomBlogCount()
      for (let i = 0; i < blogCount; i++) {
        user.blogs.push(this._createBlog(i + 1))
      }
    })
  }

  printBlogedUsers() {
    document.body.innerHTML = JSON.stringify(this.blogedUsers)
    console.log(this.blogedUsers)
  }
}

const BF = new BlogFactory({
  users,
  blogLength: 50,
  surplus: 50,
  maxLikeCount: 120,
})

BF.createBlogedUsers()
BF.printBlogedUsers()