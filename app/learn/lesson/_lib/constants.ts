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
    id: 'navigation-bar',
    title: 'Navigation Bar',
    path: `${pathPrefix}/navigation-bar`,
    category: 'basics',
    estimatedTime: 50,
    description:
      'Discover the Navigation Bar, which helps you move around a website just like the table of contents in a book!',
  },
  {
    id: 'hamburger-menu',
    title: 'Hamburger Menu',
    path: `${pathPrefix}/hamburger-menu`,
    category: 'basics',
    estimatedTime: 45,
    description:
      'Learn about the Hamburger Menu, a special icon that hides and shows the menu, similar to a chapter list in a book.',
  },
  {
    id: 'search-bar',
    title: 'Search Bar',
    path: `${pathPrefix}/search-bar`,
    category: 'basics',
    estimatedTime: 40,
    description:
      'Understand how the Search Bar helps you find information on a website, just like an index in a book!',
  },
  {
    id: 'dropdown-menu',
    title: 'Dropdown Menu',
    path: `${pathPrefix}/dropdown-menu`,
    category: 'basics',
    estimatedTime: 50,
    description:
      'Learn how Dropdown Menus work to show more options, similar to expanding a list of topics in a book.',
  },
  {
    id: 'popover',
    title: 'Pop-Up',
    path: `${pathPrefix}/popover`,
    category: 'basics',
    estimatedTime: 45,
    description:
      'Discover Pop-Ups that appear on the screen to give you extra information, like footnotes in a book!',
  },
  {
    id: 'alert',
    title: 'Notification Banner',
    path: `${pathPrefix}/alert`,
    category: 'basics',
    estimatedTime: 40,
    description:
      'Learn about Notification Banners that inform you about important messages, just like sticky notes in a book!',
  },
  {
    id: 'toast',
    title: 'Toasts',
    path: `${pathPrefix}/toast`,
    category: 'basics',
    estimatedTime: 35,
    description:
      'Understand Toast notifications that briefly appear to tell you something important, similar to side notes in a book!',
  },
  {
    id: 'form',
    title: 'Form',
    path: `${pathPrefix}/form`,
    category: 'basics',
    estimatedTime: 50,
    description:
      'Learn how Forms collect your information, just like worksheets in school!',
  },
  {
    id: 'breadcrumb',
    title: 'Breadcrumb',
    path: `${pathPrefix}/breadcrumb`,
    category: 'basics',
    estimatedTime: 40,
    description:
      'Understand Breadcrumbs that show you where you are on a website, similar to the page numbers or chapters in a book!',
  },
  {
    id: 'address-bar',
    title: 'Address Bar',
    path: `${pathPrefix}/address-bar`,
    category: 'basics',
    estimatedTime: 30,
    description:
      'Learn about the Address Bar where you type in website names, just like the title page in a book!',
  },
  {
    id: 'tooltip',
    title: 'Tooltip',
    path: `${pathPrefix}/tooltip`,
    category: 'basics',
    estimatedTime: 35,
    description:
      'Discover Tooltips that give you extra information when you hover over something, like side notes in a book!',
  },
  {
    id: 'tabs',
    title: 'Tabs',
    path: `${pathPrefix}/tabs`,
    category: 'basics',
    estimatedTime: 40,
    description:
      'Learn how Tabs organize content into different sections, similar to chapters in a book!',
  },
  {
    id: 'hyperlink',
    title: 'Hyperlink',
    path: `${pathPrefix}/hyperlink`,
    category: 'basics',
    estimatedTime: 30,
    description:
      'Understand Hyperlinks that connect you to different pages, just like references in a book!',
  },

  // Intermediate
  // Moved from Basics to Intermediate
  {
    id: 'buttons',
    title: 'Buttons',
    path: `${pathPrefix}/buttons`,
    category: 'intermediate',
    estimatedTime: 80,
    description:
      'Learn everything about buttons, from the different types to various icons and their meanings!',
  },
  {
    id: 'avatar',
    title: 'Avatar',
    path: `${pathPrefix}/avatar`,
    category: 'intermediate',
    estimatedTime: 40,
    description:
      'Learn how to use Avatar components to represent users with images or initials.',
  },
  {
    id: 'badge',
    title: 'Badge',
    path: `${pathPrefix}/badge`,
    category: 'intermediate',
    estimatedTime: 40,
    description:
      'Discover how to use Badges to display status or notification counts.',
  },
  {
    id: 'button',
    title: 'Button',
    path: `${pathPrefix}/button`,
    category: 'intermediate',
    estimatedTime: 50,
    description:
      'Learn how to create and style interactive buttons for user actions.',
  },
  {
    id: 'checkbox',
    title: 'Checkbox',
    path: `${pathPrefix}/checkbox`,
    category: 'intermediate',
    estimatedTime: 45,
    description:
      'Understand how to use Checkboxes for multiple selections in forms.',
  },
  {
    id: 'input',
    title: 'Input',
    path: `${pathPrefix}/input`,
    category: 'intermediate',
    estimatedTime: 50,
    description:
      'Discover how to create and handle different types of input fields.',
  },
  {
    id: 'label',
    title: 'Label',
    path: `${pathPrefix}/label`,
    category: 'intermediate',
    estimatedTime: 30,
    description:
      'Learn how to use Labels to describe form fields and improve accessibility.',
  },
  {
    id: 'progress',
    title: 'Progress',
    path: `${pathPrefix}/progress`,
    category: 'intermediate',
    estimatedTime: 35,
    description:
      'Understand how to display progress indicators for ongoing tasks.',
  },
  {
    id: 'radio-group',
    title: 'Radio Group',
    path: `${pathPrefix}/radio-group`,
    category: 'intermediate',
    estimatedTime: 45,
    description:
      'Learn how to use Radio Groups for single selections within forms.',
  },
  {
    id: 'select',
    title: 'Select',
    path: `${pathPrefix}/select`,
    category: 'intermediate',
    estimatedTime: 50,
    description:
      'Discover how to create dropdown Select components for choosing options.',
  },
  {
    id: 'separator',
    title: 'Separator',
    path: `${pathPrefix}/separator`,
    category: 'intermediate',
    estimatedTime: 30,
    description:
      'Learn how to use Separators to divide content and improve layout clarity.',
  },
  {
    id: 'slider',
    title: 'Slider',
    path: `${pathPrefix}/slider`,
    category: 'intermediate',
    estimatedTime: 50,
    description:
      'Understand how to implement Sliders for selecting values within a range.',
  },
  {
    id: 'switch',
    title: 'Switch',
    path: `${pathPrefix}/switch`,
    category: 'intermediate',
    estimatedTime: 40,
    description:
      'Learn how to use Switches for toggling settings on and off.',
  },
  {
    id: 'table',
    title: 'Table',
    path: `${pathPrefix}/table`,
    category: 'intermediate',
    estimatedTime: 60,
    description:
      'Discover how to create and style Tables to display structured data.',
  },
  {
    id: 'textarea',
    title: 'Textarea',
    path: `${pathPrefix}/textarea`,
    category: 'intermediate',
    estimatedTime: 40,
    description:
      'Learn how to implement Textareas for multi-line user input.',
  },
  {
    id: 'toggle',
    title: 'Toggle',
    path: `${pathPrefix}/toggle`,
    category: 'intermediate',
    estimatedTime: 40,
    description:
      'Understand how to use Toggles for switching between two states.',
  },
  {
    id: 'toggle-group',
    title: 'Toggle Group',
    path: `${pathPrefix}/toggle-group`,
    category: 'intermediate',
    estimatedTime: 50,
    description:
      'Learn how to group Toggles for multiple state switches.',
  },

  // Intermediate (existing intermediate lessons)
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
  // Tabs and Tooltip have been moved to Basics above

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
