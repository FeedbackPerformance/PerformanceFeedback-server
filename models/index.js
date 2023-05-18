const Team = require('./team')
const User = require('./user')
const Review = require('./review')
const Position = require('./position')
const Office = require('./office')
const Indicator = require('./indicator')
const Country = require('./country')
const Category = require('./category')

// Relation Leader - Led
User.belongsTo(User, { as: 'leader', foreignKey: 'leaderId' })
User.hasMany(User, { as: 'led', foreignKey: 'leaderId' })

// Relation User - Team
User.belongsTo(Team, { as: 'team', foreignKey: 'teamId' })
Team.hasMany(User, { foreignKey: 'teamId' })

// Relation User - Review | Evaluator
Review.belongsTo(User, { as: 'evaluator', foreignKey: 'evaluatorId' })
User.hasMany(Review, { as: 'evaluator', foreignKey: 'evaluatorId' })

// Relation User - Review | Evaluated
Review.belongsTo(User, { as: 'evaluated', foreignKey: 'evaluatedId' })
User.hasMany(Review, { as: 'evaluated', foreignKey: 'evaluatedId' })

// Relation User - Position
User.belongsTo(Position, { as: 'position', foreignKey: 'positionId' })
Position.hasMany(User, { as: 'user', foreignKey: 'positionId' })

// Relation User - Office
User.belongsTo(Office, { as: 'office', foreignKey: 'officeId' })
Office.hasMany(User, { foreignKey: 'officeId' })

// Relation User - Category
User.belongsTo(Category, { as: 'category', foreignKey: 'categoryId' })
Category.hasMany(User, { foreignKey: 'categoryId' })

// Relation Office - Country
Office.belongsTo(Country, { as: 'country', foreignKey: 'countryId' })
Country.hasMany(Office, { foreignKey: 'countryId' })

// Relation Category - Indicator
Indicator.belongsTo(Category, { as: 'category', foreignKey: 'categoryId' })
Category.hasMany(Indicator, { as: 'category', foreignKey: 'categoryId' })

module.exports = {
  User,
  Team,
  Review,
  Position,
  Office,
  Indicator,
  Country,
  Category,
}
