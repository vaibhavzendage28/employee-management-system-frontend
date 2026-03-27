const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "rahul.sharma@company.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Sales Meeting",
        description: "Attend weekly sales meeting.",
        date: "12 March, 2026",
        category: "Meeting",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Prepare Sales Report",
        description: "Create monthly sales report for management.",
        date: "15 March, 2026",
        category: "Sales",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client Follow-up",
        description: "Call existing clients for feedback.",
        date: "14 March, 2026",
        category: "Communication",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Update CRM",
        description: "Update customer data in CRM.",
        date: "10 March, 2026",
        category: "Data",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Lead Analysis",
        description: "Analyze potential client leads.",
        date: "9 March, 2026",
        category: "Sales",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "priya.patel@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Landing Page Design",
        description: "Design marketing landing page.",
        date: "18 March, 2026",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Banner Creation",
        description: "Create promotional banners.",
        date: "17 March, 2026",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Navbar Fix",
        description: "Fix responsive navbar issue.",
        date: "14 March, 2026",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "UI Testing",
        description: "Test UI on multiple devices.",
        date: "11 March, 2026",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prototype Review",
        description: "Review design prototype.",
        date: "9 March, 2026",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 3,
    firstName: "Arjun",
    email: "arjun.mehta@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "API Development",
        description: "Develop authentication API.",
        date: "16 March, 2026",
        category: "Backend",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Database Migration",
        description: "Migrate database schema.",
        date: "15 March, 2026",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Bug Fixing",
        description: "Fix backend bugs.",
        date: "14 March, 2026",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "API Documentation",
        description: "Document backend APIs.",
        date: "11 March, 2026",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Code Refactor",
        description: "Refactor old modules.",
        date: "9 March, 2026",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "neha.verma@company.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Social Media Plan",
        description: "Plan upcoming campaign.",
        date: "20 March, 2026",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Ad Copy Writing",
        description: "Write copy for ads.",
        date: "19 March, 2026",
        category: "Content",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Campaign Monitoring",
        description: "Monitor ad performance.",
        date: "15 March, 2026",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "SEO Blog",
        description: "Write SEO optimized blog.",
        date: "11 March, 2026",
        category: "Content",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Email Campaign",
        description: "Run marketing email campaign.",
        date: "8 March, 2026",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 5,
    firstName: "Vikram",
    email: "vikram.singh@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 2
    },
    tasks: [
      {
        title: "Server Setup",
        description: "Setup staging server.",
        date: "14 March, 2026",
        category: "DevOps",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "CI/CD Pipeline",
        description: "Configure deployment pipeline.",
        date: "13 March, 2026",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "System Monitoring",
        description: "Monitor server health.",
        date: "12 March, 2026",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Database Backup",
        description: "Backup production database.",
        date: "10 March, 2026",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Security Scan",
        description: "Run vulnerability scans.",
        date: "9 March, 2026",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admins = [
  {
    id: 1,
    email: "admin@company.com",
    password: "admin123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admins", JSON.stringify(admins));
    console.log('Data saved in localStorage');
}

export const getLocalStorage = () => {
    const employeesData = JSON.parse(localStorage.getItem("employees"));
    const adminsData = JSON.parse(localStorage.getItem("admins"));
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    
    return { employees: employeesData, admins: adminsData, loggedInUser: loggedInUser };
}