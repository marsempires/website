import { Building } from './types'

export const BUILDINGS: Record<Building, { name: string; description: string }> = {
  lander: {
    name: 'Atlantic Lander',
    description:
      'Detecting spacecraft attempting to approach your empire. Provide shields to protect the buildings, up to a maximum of 3 shields every 5 hours.',
  },
  ship: {
    name: 'Thunder Spacecraft',
    description:
      'Take you to other empires and attack them. The higher the level of the spacecraft, the more coins you can earn.',
  },
  ranch: {
    name: 'Oxygen Farm',
    description:
      'A farm that produces and regenerates oxygen for the entire empire. When reaching level 3, you can stake tokens to earn more money.',
  },
  drill: {
    name: 'Hyper Drill',
    description:
      'Exploit the minerals present in your empire. The resources can be in the form of coins or they can be resources for upgrading buildings.',
  },
  basement: {
    name: 'Golden Basement',
    description: 'This is the main headquarters, try to protect it by any means necessary.',
  },
}
