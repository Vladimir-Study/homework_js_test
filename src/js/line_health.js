export function lineHealth(userData) {
  if (userData.health < 15) {
    return 'critical';
  } if (userData.health > 50) {
    return 'healthy';
  }
  return 'wounded';
}
