import { 
  Home, 
  LayoutGrid, 
  Menu, 
  Type, 
  MousePointer, 
  Image, 
  FormInput, 
  ToggleLeft, 
  Calendar, 
  Table, 
  AlertTriangle, 
  CheckCircle,
  MessageSquare,
  BarChart3,
  Settings,

  Code
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

// Component categories with sub-items
const componentCategories = [
  {
    title: "Getting Started",
    icon: Home,
    items: [
      { title: "Overview", url: "/guide", icon: Home },
      { title: "Installation", url: "/guide/installation", icon: Settings },
    ]
  },
  {
    title: "Navigation",
    icon: Menu,
    items: [
      { title: "Navbar", url: "/components/navbar", icon: Menu },
      { title: "Sidebar", url: "/components/sidebar", icon: LayoutGrid },
      { title: "Breadcrumb", url: "/components/breadcrumb", icon: MousePointer },
      { title: "Tabs", url: "/components/tabs", icon: Table },
    ]
  },
  {
    title: "Layout",
    icon: LayoutGrid,
    items: [
      { title: "Grid", url: "/components/grid", icon: LayoutGrid },
      { title: "Container", url: "/components/container", icon: LayoutGrid },
      { title: "Card", url: "/components/card", icon: LayoutGrid },
      { title: "Carousel", url: "/components/carousel", icon: Image },
    ]
  },
  {
    title: "Forms",
    icon: FormInput,
    items: [
      { title: "Input", url: "/components/input", icon: FormInput },
      { title: "Button", url: "/components/button", icon: MousePointer },
      { title: "Checkbox", url: "/components/checkbox", icon: CheckCircle },
      { title: "Radio", url: "/components/radio", icon: ToggleLeft },
      { title: "Select", url: "/components/select", icon: FormInput },
      { title: "Textarea", url: "/components/textarea", icon: Type },
    ]
  },
  {
    title: "Feedback",
    icon: MessageSquare,
    items: [
      { title: "Alert", url: "/components/alert", icon: AlertTriangle },
      { title: "Toast", url: "/components/toast", icon: MessageSquare },
      { title: "Modal", url: "/components/modal", icon: MessageSquare },
    ]
  },
  {
    title: "Data Display",
    icon: BarChart3,
    items: [
      { title: "Table", url: "/components/table", icon: Table },
      { title: "Badge", url: "/components/badge", icon: CheckCircle },
      { title: "Progress", url: "/components/progress", icon: BarChart3 },
    ]
  }
]

export function AppSidebar() {
  return (
    <Sidebar >
      <SidebarContent>
        {componentCategories.map((category) => (
          <SidebarGroup key={category.title}>
            <SidebarGroupLabel>{category.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {category.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}