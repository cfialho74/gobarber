module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    date: DataTypes.DATE
  })

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { foreignkey: 'user_id' })
    Appointment.belongsTo(models.User, { foreignkey: 'provider_id' })
  }

  return Appointment
}
