// lib/types/lesson.ts

export type LessonCategory = 'basics' | 'intermediate' | 'advanced';

export const LESSON_CATEGORIES: LessonCategory[] = ['basics', 'intermediate', 'advanced']

export type Lesson = {
  id: string; // Unique identifier
  title: string;
  path: string;
  category: LessonCategory;
  estimatedTime: number; // in minutes
  description: string;
};

const pathPrefix = '/learn/lesson'

export const LESSON_DATA: Lesson[] = [
  // Basics
  {
    id: 'buttons',
    title: 'Buttons',
    path: `${pathPrefix}/buttons`,
    category: 'basics',
    estimatedTime: 80,
    description:
      'Learn everything about buttons, from the different types to various icons and their meanings!',
  },
  {
    id: 'alert',
    title: 'Alert',
    path: `${pathPrefix}/alert`,
    category: 'basics',
    estimatedTime: 45,
    description:
      'Understand how to display important messages to users using Alert components.',
  },
  {
    id: 'avatar',
    title: 'Avatar',
    path: `${pathPrefix}/avatar`,
    category: 'basics',
    estimatedTime: 40,
    description:
      'Learn how to use Avatar components to represent users with images or initials.',
  },
  {
    id: 'badge',
    title: 'Badge',
    path: `${pathPrefix}/badge`,
    category: 'basics',
    estimatedTime: 40,
    description:
      'Discover how to use Badges to display status or notification counts.',
  },
  {
    id: 'button',
    title: 'Button',
    path: `${pathPrefix}/button`,
    category: 'basics',
    estimatedTime: 50,
    description:
      'Learn how to create and style interactive buttons for user actions.',
  },
  {
    id: 'checkbox',
    title: 'Checkbox',
    path: `${pathPrefix}/checkbox`,
    category: 'basics',
    estimatedTime: 45,
    description:
      'Understand how to use Checkboxes for multiple selections in forms.',
  },
  {
    id: 'form',
    title: 'Form',
    path: `${pathPrefix}/form`,
    category: 'basics',
    estimatedTime: 70,
    description:
      'Learn the fundamentals of creating and managing forms for user input.',
  },
  {
    id: 'input',
    title: 'Input',
    path: `${pathPrefix}/input`,
    category: 'basics',
    estimatedTime: 50,
    description:
      'Discover how to create and handle different types of input fields.',
  },
  {
    id: 'label',
    title: 'Label',
    path: `${pathPrefix}/label`,
    category: 'basics',
    estimatedTime: 30,
    description:
      'Learn how to use Labels to describe form fields and improve accessibility.',
  },
  {
    id: 'progress',
    title: 'Progress',
    path: `${pathPrefix}/progress`,
    category: 'basics',
    estimatedTime: 35,
    description:
      'Understand how to display progress indicators for ongoing tasks.',
  },
  {
    id: 'radio-group',
    title: 'Radio Group',
    path: `${pathPrefix}/radio-group`,
    category: 'basics',
    estimatedTime: 45,
    description:
      'Learn how to use Radio Groups for single selections within forms.',
  },
  {
    id: 'select',
    title: 'Select',
    path: `${pathPrefix}/select`,
    category: 'basics',
    estimatedTime: 50,
    description:
      'Discover how to create dropdown Select components for choosing options.',
  },
  {
    id: 'separator',
    title: 'Separator',
    path: `${pathPrefix}/separator`,
    category: 'basics',
    estimatedTime: 30,
    description:
      'Learn how to use Separators to divide content and improve layout clarity.',
  },
  {
    id: 'slider',
    title: 'Slider',
    path: `${pathPrefix}/slider`,
    category: 'basics',
    estimatedTime: 50,
    description:
      'Understand how to implement Sliders for selecting values within a range.',
  },
  {
    id: 'switch',
    title: 'Switch',
    path: `${pathPrefix}/switch`,
    category: 'basics',
    estimatedTime: 40,
    description:
      'Learn how to use Switches for toggling settings on and off.',
  },
  {
    id: 'table',
    title: 'Table',
    path: `${pathPrefix}/table`,
    category: 'basics',
    estimatedTime: 60,
    description:
      'Discover how to create and style Tables to display structured data.',
  },
  {
    id: 'textarea',
    title: 'Textarea',
    path: `${pathPrefix}/textarea`,
    category: 'basics',
    estimatedTime: 40,
    description:
      'Learn how to implement Textareas for multi-line user input.',
  },
  {
    id: 'toggle',
    title: 'Toggle',
    path: `${pathPrefix}/toggle`,
    category: 'basics',
    estimatedTime: 40,
    description:
      'Understand how to use Toggles for switching between two states.',
  },
  {
    id: 'toggle-group',
    title: 'Toggle Group',
    path: `${pathPrefix}/toggle-group`,
    category: 'basics',
    estimatedTime: 50,
    description:
      'Learn how to group Toggles for multiple state switches.',
  },

  // Intermediate
  {
    id: 'accordion',
    title: 'Accordion',
    path: `${pathPrefix}/accordion`,
    category: 'intermediate',
    estimatedTime: 60,
    description:
      'Learn how to use the Accordion component to display collapsible content sections.',
  },
  {
    id: 'alert-dialog',
    title: 'Alert Dialog',
    path: `${pathPrefix}/alert-dialog`,
    category: 'intermediate',
    estimatedTime: 70,
    description:
      'Understand how to implement Alert Dialogs for important user confirmations.',
  },
  {
    id: 'aspect-ratio',
    title: 'Aspect Ratio',
    path: `${pathPrefix}/aspect-ratio`,
    category: 'intermediate',
    estimatedTime: 55,
    description:
      'Learn how to maintain consistent aspect ratios for media and elements.',
  },
  {
    id: 'breadcrumb',
    title: 'Breadcrumb',
    path: `${pathPrefix}/breadcrumb`,
    category: 'intermediate',
    estimatedTime: 60,
    description:
      'Discover how to use Breadcrumbs to enhance navigation within your application.',
  },
  {
    id: 'calendar',
    title: 'Calendar',
    path: `${pathPrefix}/calendar`,
    category: 'intermediate',
    estimatedTime: 80,
    description:
      'Learn how to implement Calendar components for date selection and scheduling.',
  },
  {
    id: 'card',
    title: 'Card',
    path: `${pathPrefix}/card`,
    category: 'intermediate',
    estimatedTime: 60,
    description:
      'Understand how to use Cards to encapsulate and display related information.',
  },
  {
    id: 'carousel',
    title: 'Carousel',
    path: `${pathPrefix}/carousel`,
    category: 'intermediate',
    estimatedTime: 75,
    description:
      'Learn how to create Carousels for showcasing multiple pieces of content interactively.',
  },
  {
    id: 'collapsible',
    title: 'Collapsible',
    path: `${pathPrefix}/collapsible`,
    category: 'intermediate',
    estimatedTime: 65,
    description:
      'Discover how to use Collapsible components to show or hide content sections.',
  },
  {
    id: 'combobox',
    title: 'Combobox',
    path: `${pathPrefix}/combobox`,
    category: 'intermediate',
    estimatedTime: 70,
    description:
      'Learn how to implement Comboboxes for enhanced selection capabilities with autocomplete.',
  },
  {
    id: 'command',
    title: 'Command',
    path: `${pathPrefix}/command`,
    category: 'intermediate',
    estimatedTime: 80,
    description:
      'Understand how to create Command components for executing user commands efficiently.',
  },
  {
    id: 'context-menu',
    title: 'Context Menu',
    path: `${pathPrefix}/context-menu`,
    category: 'intermediate',
    estimatedTime: 75,
    description:
      'Learn how to implement Context Menus for providing additional options on user interactions.',
  },
  {
    id: 'date-picker',
    title: 'Date Picker',
    path: `${pathPrefix}/date-picker`,
    category: 'intermediate',
    estimatedTime: 65,
    description:
      'Discover how to use Date Pickers for selecting dates in forms and applications.',
  },
  {
    id: 'dialog',
    title: 'Dialog',
    path: `${pathPrefix}/dialog`,
    category: 'intermediate',
    estimatedTime: 70,
    description:
      'Learn how to implement Dialogs for displaying important information or interactions.',
  },
  {
    id: 'drawer',
    title: 'Drawer',
    path: `${pathPrefix}/drawer`,
    category: 'intermediate',
    estimatedTime: 75,
    description:
      'Understand how to use Drawers to present additional content or navigation options.',
  },
  {
    id: 'dropdown-menu',
    title: 'Dropdown Menu',
    path: `${pathPrefix}/dropdown-menu`,
    category: 'intermediate',
    estimatedTime: 60,
    description:
      'Learn how to create Dropdown Menus for presenting a list of options.',
  },
  {
    id: 'hover-card',
    title: 'Hover Card',
    path: `${pathPrefix}/hover-card`,
    category: 'intermediate',
    estimatedTime: 65,
    description:
      'Discover how to use Hover Cards to display additional information on hover.',
  },
  {
    id: 'input-otp',
    title: 'Input OTP',
    path: `${pathPrefix}/input-otp`,
    category: 'intermediate',
    estimatedTime: 70,
    description:
      'Learn how to implement Input OTP fields for secure one-time password entry.',
  },
  {
    id: 'menubar',
    title: 'Menubar',
    path: `${pathPrefix}/menubar`,
    category: 'intermediate',
    estimatedTime: 80,
    description:
      'Understand how to create Menubars for organizing navigation links effectively.',
  },
  {
    id: 'navigation-menu',
    title: 'Navigation Menu',
    path: `${pathPrefix}/navigation-menu`,
    category: 'intermediate',
    estimatedTime: 75,
    description:
      'Learn how to implement Navigation Menus for guiding users through your application.',
  },
  {
    id: 'pagination',
    title: 'Pagination',
    path: `${pathPrefix}/pagination`,
    category: 'intermediate',
    estimatedTime: 60,
    description:
      'Discover how to use Pagination to navigate through large sets of data efficiently.',
  },
  {
    id: 'popover',
    title: 'Popover',
    path: `${pathPrefix}/popover`,
    category: 'intermediate',
    estimatedTime: 65,
    description:
      'Learn how to implement Popovers for displaying additional content on demand.',
  },
  {
    id: 'resizable',
    title: 'Resizable',
    path: `${pathPrefix}/resizable`,
    category: 'intermediate',
    estimatedTime: 70,
    description:
      'Understand how to make elements resizable for better user customization.',
  },
  {
    id: 'scroll-area',
    title: 'Scroll Area',
    path: `${pathPrefix}/scroll-area`,
    category: 'intermediate',
    estimatedTime: 60,
    description:
      'Learn how to implement Scroll Areas for managing overflow content effectively.',
  },
  {
    id: 'sheet',
    title: 'Sheet',
    path: `${pathPrefix}/sheet`,
    category: 'intermediate',
    estimatedTime: 75,
    description:
      'Discover how to use Sheets to display supplementary content in a sliding panel.',
  },
  {
    id: 'sidebar',
    title: 'Sidebar',
    path: `${pathPrefix}/sidebar`,
    category: 'intermediate',
    estimatedTime: 80,
    description:
      'Learn how to create Sidebars for additional navigation or content areas.',
  },
  {
    id: 'skeleton',
    title: 'Skeleton',
    path: `${pathPrefix}/skeleton`,
    category: 'intermediate',
    estimatedTime: 60,
    description:
      'Understand how to use Skeleton screens to improve perceived loading times.',
  },
  {
    id: 'tabs',
    title: 'Tabs',
    path: `${pathPrefix}/tabs`,
    category: 'intermediate',
    estimatedTime: 65,
    description:
      'Learn how to implement Tabs for organizing content into separate views.',
  },
  {
    id: 'toast',
    title: 'Toast',
    path: `${pathPrefix}/toast`,
    category: 'intermediate',
    estimatedTime: 55,
    description:
      'Discover how to use Toast notifications to inform users about actions or events.',
  },
  {
    id: 'tooltip',
    title: 'Tooltip',
    path: `${pathPrefix}/tooltip`,
    category: 'intermediate',
    estimatedTime: 50,
    description:
      'Learn how to implement Tooltips for providing contextual information on hover.',
  },

  // Advanced
  {
    id: 'chart',
    title: 'Chart',
    path: `${pathPrefix}/chart`,
    category: 'advanced',
    estimatedTime: 120,
    description:
      'Learn how to create dynamic Charts for visualizing data effectively.',
  },
  {
    id: 'data-table',
    title: 'Data Table',
    path: `${pathPrefix}/data-table`,
    category: 'advanced',
    estimatedTime: 140,
    description:
      'Understand how to implement Data Tables for displaying and managing large datasets.',
  },
  {
    id: 'sonner',
    title: 'Sonner',
    path: `${pathPrefix}/sonner`,
    category: 'advanced',
    estimatedTime: 100,
    description:
      'Explore the Sonner component for advanced notifications and messaging features.',
  },
];