export const nxduneMetrics = {
  sprintProgress: 65,
  onTimeDelivery: 94,
  teamVelocity: 3.2,
  completedSprints: 12
};

export const activeTasks = [
  {
    id: 1,
    name: 'Design Sprint',
    progress: 82,
    assignees: 2,
    status: 'in-progress',
    color: '#9d174d'
  },
  {
    id: 2,
    name: 'API Integration',
    progress: 61,
    assignees: 1,
    status: 'in-progress',
    color: '#7c3aed'
  },
  {
    id: 3,
    name: 'QA Testing',
    progress: 45,
    assignees: 2,
    status: 'in-progress',
    color: '#a855f7'
  },
  {
    id: 4,
    name: 'Deployment',
    progress: 20,
    assignees: 1,
    status: 'in-progress',
    color: '#3b82f6'
  }
];

export const activityFeed = [
  {
    id: 1,
    message: 'Design review completed',
    timestamp: '2m ago',
    status: 'success',
    color: '#10b981'
  },
  {
    id: 2,
    message: 'Sprint review scheduled',
    timestamp: '10m ago',
    status: 'pending',
    color: '#9d174d'
  },
  {
    id: 3,
    message: '3 tickets resolved',
    timestamp: '18m ago',
    status: 'info',
    color: '#7c3aed'
  }
];

export default {
  nxduneMetrics,
  activeTasks,
  activityFeed
};
