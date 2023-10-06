import { Ecommerce, Analytics, Calendar, Bloggers, Blogs, Stacked, Pyramid, Users, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from '../../pages/admin';

const routes =[
    /**
     * Dashboard
     */
    {
        path: '',
        elt: <Ecommerce />
    },
    {
        path: 'stat',
        elt: <Analytics />
    },
    /**
     * Pages
     */
    {
        path: 'blogs',
        elt: <Blogs />
    },
    {
        path: 'bloggers',
        elt: <Bloggers />
    },
    {
        path: 'users',
        elt: <Users />
    },
    /**
     * Apps
     */
    {
        path: 'kanban',
        elt: <Kanban />
    },
    {
        path: 'editor',
        elt: <Editor />
    },
    {
        path: 'calendar',
        elt: <Calendar />
    },
    {
        path: 'color',
        elt: <ColorPicker />
    },
    /**
     * Charts
     */
    {
        path: 'line',
        elt: <Line />
    },
    {
        path: 'area',
        elt: <Area />
    },
    {
        path: 'bar',
        elt: <Bar />
    },
    {
        path: 'pie',
        elt: <Pie />
    },
    {
        path: 'financial',
        elt: <Financial />
    },
    {
        path: 'color-mapping',
        elt: <ColorMapping />
    },
    {
        path: 'pyramid',
        elt: <Pyramid />
    },
    {
        path: 'stacked',
        elt: <Stacked />
    },
];
export default  routes;