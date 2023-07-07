import {SideMenu, SubSideMenu} from "../models/side-bar.model";

export const ADMIN_ROUTES: Array<SideMenu> = [
  {
    icon: 'dashboard',
    label: 'Accueil',
    link: '/admin',
    sub_content: []
  },
  {
    icon: 'agents',
    label: 'Employes',
    link: '/admin/employes',
    sub_content: []
  },
  {
    icon: 'doc',
    label: 'Rapports',
    link: '/admin/rapports',
    sub_content: []
  },
  {
    icon: 'doc',
    label: 'Evaluations',
    link: '/admin/evaluations',
    sub_content: []
  }
]

export const EMPLOYE_ROUTES: Array<SideMenu> = []
