/* Transpiled source from original src(2).zip. Each original JSX page is preserved as JS create-element calls. */
(function(){const __register=window.__interiorRuntime.register;
__register("src/App.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const ProtectedRoute_1 = __importDefault(require("./components/ProtectedRoute"));
const RoleHomeRedirect_1 = __importDefault(require("./components/RoleHomeRedirect"));
const authService_1 = require("./services/authService");
const AccessDeniedPage_1 = __importDefault(require("./pages/AccessDeniedPage"));
const AdminDashboard_1 = __importDefault(require("./pages/AdminDashboard"));
const AdminRolesAccessPage_1 = __importDefault(require("./pages/AdminRolesAccessPage"));
const AdminSecurityPage_1 = __importDefault(require("./pages/AdminSecurityPage"));
const AdminSystemActivityPage_1 = __importDefault(require("./pages/AdminSystemActivityPage"));
const AdminSystemSettingsPage_1 = __importDefault(require("./pages/AdminSystemSettingsPage"));
const AdminUserManagementPage_1 = __importDefault(require("./pages/AdminUserManagementPage"));
const AuditLogPage_1 = __importDefault(require("./pages/AuditLogPage"));
const ClientActivityPage_1 = __importDefault(require("./pages/ClientActivityPage"));
const ClientAssetLibraryPage_1 = __importDefault(require("./pages/ClientAssetLibraryPage"));
const ClientDashboard_1 = __importDefault(require("./pages/ClientDashboard"));
const ClientConsultationPage_1 = __importDefault(require("./pages/ClientConsultationPage"));
const ClientFeedbackPage_1 = __importDefault(require("./pages/ClientFeedbackPage"));
const ClientProjectDetailsPage_1 = __importDefault(require("./pages/ClientProjectDetailsPage"));
const ClientProjectsPage_1 = __importDefault(require("./pages/ClientProjectsPage"));
const ClientRenderQueuePage_1 = __importDefault(require("./pages/ClientRenderQueuePage"));
const ClientVersionHistoryPage_1 = __importDefault(require("./pages/ClientVersionHistoryPage"));
const DesignerAssetLibraryPage_1 = __importDefault(require("./pages/DesignerAssetLibraryPage"));
const DesignerDashboard_1 = __importDefault(require("./pages/DesignerDashboard"));
const DesignerFeedbackPage_1 = __importDefault(require("./pages/DesignerFeedbackPage"));
const DesignerFinalOutputPage_1 = __importDefault(require("./pages/DesignerFinalOutputPage"));
const DesignerProjectDetailsPage_1 = __importDefault(require("./pages/DesignerProjectDetailsPage"));
const DesignerProjectsPage_1 = __importDefault(require("./pages/DesignerProjectsPage"));
const DesignerRenderQueuePage_1 = __importDefault(require("./pages/DesignerRenderQueuePage"));
const DesignerUploadAssetPage_1 = __importDefault(require("./pages/DesignerUploadAssetPage"));
const DesignerUploadVersionPage_1 = __importDefault(require("./pages/DesignerUploadVersionPage"));
const DesignerVersionHistoryPage_1 = __importDefault(require("./pages/DesignerVersionHistoryPage"));
const LoginPage_1 = __importDefault(require("./pages/LoginPage"));
const NotFoundPage_1 = __importDefault(require("./pages/NotFoundPage"));
const NotificationsPage_1 = __importDefault(require("./pages/NotificationsPage"));
const ProjectManagerActivityPage_1 = __importDefault(require("./pages/ProjectManagerActivityPage"));
const ProjectManagerCreateProjectPage_1 = __importDefault(require("./pages/ProjectManagerCreateProjectPage"));
const ProjectManagerConsultationsPage_1 = __importDefault(require("./pages/ProjectManagerConsultationsPage"));
const ProjectManagerDashboard_1 = __importDefault(require("./pages/ProjectManagerDashboard"));
const ProjectManagerProjectDetailsPage_1 = __importDefault(require("./pages/ProjectManagerProjectDetailsPage"));
const ProjectManagerProjectsPage_1 = __importDefault(require("./pages/ProjectManagerProjectsPage"));
const ProjectManagerRenderQueuePage_1 = __importDefault(require("./pages/ProjectManagerRenderQueuePage"));
const ProjectManagerReportsPage_1 = __importDefault(require("./pages/ProjectManagerReportsPage"));
function App() {
    return (h(react_router_dom_1.BrowserRouter, null,
        h(react_router_dom_1.Routes, null,
            h(react_router_dom_1.Route, { path: "/", element: h(RoleHomeRedirect_1.default, null) }),
            h(react_router_dom_1.Route, { path: "/dashboard", element: h(RoleHomeRedirect_1.default, null) }),
            h(react_router_dom_1.Route, { path: "/login", element: h(LoginPage_1.default, null) }),
            h(react_router_dom_1.Route, { path: "/access-denied", element: h(AccessDeniedPage_1.default, null) }),
            h(react_router_dom_1.Route, { path: "/client/dashboard", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.CLIENT
                    ] },
                    h(ClientDashboard_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/client/consultations", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.CLIENT
                    ] },
                    h(ClientConsultationPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/client/projects", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.CLIENT
                    ] },
                    h(ClientProjectsPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/client/projects/:projectId", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.CLIENT
                    ] },
                    h(ClientProjectDetailsPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/client/assets", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.CLIENT
                    ] },
                    h(ClientAssetLibraryPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/client/versions", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.CLIENT
                    ] },
                    h(ClientVersionHistoryPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/client/render-queue", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.CLIENT
                    ] },
                    h(ClientRenderQueuePage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/client/feedback", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.CLIENT
                    ] },
                    h(ClientFeedbackPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/client/activity", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.CLIENT
                    ] },
                    h(ClientActivityPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/client/notifications", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.CLIENT
                    ] },
                    h(NotificationsPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/designer/dashboard", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.INTERIOR_DESIGNER
                    ] },
                    h(DesignerDashboard_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/designer/projects", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.INTERIOR_DESIGNER
                    ] },
                    h(DesignerProjectsPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/designer/projects/:projectId", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.INTERIOR_DESIGNER
                    ] },
                    h(DesignerProjectDetailsPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/designer/assets", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.INTERIOR_DESIGNER
                    ] },
                    h(DesignerAssetLibraryPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/designer/assets/upload", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.INTERIOR_DESIGNER
                    ] },
                    h(DesignerUploadAssetPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/designer/versions/upload", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.INTERIOR_DESIGNER
                    ] },
                    h(DesignerUploadVersionPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/designer/versions", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.INTERIOR_DESIGNER
                    ] },
                    h(DesignerVersionHistoryPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/designer/render-queue", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.INTERIOR_DESIGNER
                    ] },
                    h(DesignerRenderQueuePage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/designer/feedback", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.INTERIOR_DESIGNER
                    ] },
                    h(DesignerFeedbackPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/designer/render-jobs/:renderJobId/final-output", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.INTERIOR_DESIGNER
                    ] },
                    h(DesignerFinalOutputPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/designer/notifications", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.INTERIOR_DESIGNER
                    ] },
                    h(NotificationsPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/manager/dashboard", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.PROJECT_MANAGER
                    ] },
                    h(ProjectManagerDashboard_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/manager/consultations", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.PROJECT_MANAGER
                    ] },
                    h(ProjectManagerConsultationsPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/manager/projects", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.PROJECT_MANAGER
                    ] },
                    h(ProjectManagerProjectsPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/manager/projects/create", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.PROJECT_MANAGER
                    ] },
                    h(ProjectManagerCreateProjectPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/manager/projects/:projectId", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.PROJECT_MANAGER
                    ] },
                    h(ProjectManagerProjectDetailsPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/manager/project-activity", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.PROJECT_MANAGER
                    ] },
                    h(ProjectManagerActivityPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/manager/render-queue", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.PROJECT_MANAGER
                    ] },
                    h(ProjectManagerRenderQueuePage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/manager/notifications", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.PROJECT_MANAGER
                    ] },
                    h(NotificationsPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/manager/audit-log", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.PROJECT_MANAGER
                    ] },
                    h(AuditLogPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/manager/reports", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.PROJECT_MANAGER
                    ] },
                    h(ProjectManagerReportsPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/admin/dashboard", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.ADMIN
                    ] },
                    h(AdminDashboard_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/admin/users", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.ADMIN
                    ] },
                    h(AdminUserManagementPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/admin/roles-access", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.ADMIN
                    ] },
                    h(AdminRolesAccessPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/admin/system-activity", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.ADMIN
                    ] },
                    h(AdminSystemActivityPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/admin/audit-log", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.ADMIN
                    ] },
                    h(AuditLogPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/admin/security", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.ADMIN
                    ] },
                    h(AdminSecurityPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "/admin/system-settings", element: h(ProtectedRoute_1.default, { allowedRoles: [
                        authService_1.USER_ROLES.ADMIN
                    ] },
                    h(AdminSystemSettingsPage_1.default, null)) }),
            h(react_router_dom_1.Route, { path: "*", element: h(NotFoundPage_1.default, null) }))));
}
exports.default = App;

});
__register("src/components/AdminSidebar.jsx",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const lucide_react_1 = require("lucide-react");
function AdminSidebar({ isOpen, onClose }) {
    return (h(Fragment, null,
        isOpen &&
            (h("button", { type: "button", className: "sidebar-backdrop", onClick: onClose, "aria-label": "Close sidebar" })),
        h("aside", { className: isOpen
                ? 'dashboard-sidebar sidebar-open'
                : 'dashboard-sidebar' },
            h("div", { className: "sidebar-header" },
                h("div", { className: "sidebar-brand" }, "InteriorSync"),
                h("button", { type: "button", className: "sidebar-close-button", onClick: onClose, "aria-label": "Close sidebar" },
                    h(lucide_react_1.X, { size: 22 }))),
            h("nav", { className: "sidebar-navigation" },
                h(react_router_dom_1.NavLink, { to: "/admin/dashboard", end: true, className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.LayoutDashboard, { size: 22 }),
                    h("span", null, "Dashboard")),
                h("p", { className: "sidebar-section-title" }, "User Management"),
                h(react_router_dom_1.NavLink, { to: "/admin/users", end: true, className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.Users, { size: 22 }),
                    h("span", null, "Users")),
                h(react_router_dom_1.NavLink, { to: "/admin/roles-access", end: true, className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.UserCog, { size: 22 }),
                    h("span", null, "Roles & Access")),
                h("p", { className: "sidebar-section-title" }, "Monitoring"),
                h(react_router_dom_1.NavLink, { to: "/admin/system-activity", end: true, className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.Activity, { size: 22 }),
                    h("span", null, "System Activity")),
                h(react_router_dom_1.NavLink, { to: "/admin/audit-log", end: true, className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.ScrollText, { size: 22 }),
                    h("span", null, "Audit Log")),
                h("p", { className: "sidebar-section-title" }, "System"),
                h(react_router_dom_1.NavLink, { to: "/admin/security", end: true, className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.ShieldCheck, { size: 22 }),
                    h("span", null, "Security")),
                h(react_router_dom_1.NavLink, { to: "/admin/system-settings", end: true, className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.Settings, { size: 22 }),
                    h("span", null, "System Settings"))))));
}
exports.default = AdminSidebar;

});
__register("src/components/ClientProjectAssetsTab.jsx",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lucide_react_1 = require("lucide-react");
function formatDate(value) {
    if (!value) {
        return 'Not available';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return 'Not available';
    }
    return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
function getUserName(user) {
    if (!user) {
        return 'Unknown';
    }
    const firstName = user.firstName?.trim() || '';
    const lastName = user.lastName?.trim() || '';
    const fullName = `${firstName} ${lastName}`.trim();
    return (fullName ||
        user.email ||
        'Unknown');
}
function getVersionsForAsset(asset, versions) {
    return versions
        .filter(version => version?.asset?.assetId ===
        asset.assetId)
        .sort((a, b) => (b.versionNumber || 0) -
        (a.versionNumber || 0));
}
function ClientProjectAssetsTab({ assets, versions, downloadingVersionId, unavailableVersionIds, onDownloadVersion, onOpenVersions }) {
    if (!assets.length) {
        return (h("section", { className: "project-tab-empty" },
            h(lucide_react_1.Layers3, { size: 38 }),
            h("strong", null, "No project assets yet"),
            h("span", null, "Design assets uploaded by the assigned designer will appear here.")));
    }
    return (h("section", { className: "project-assets-section" },
        h("div", { className: "project-tab-section-heading" },
            h("div", null,
                h("h2", null, "Project Assets"),
                h("p", null, "Design files and supporting assets associated with this project.")),
            h("span", { className: "project-section-count" },
                assets.length,
                assets.length === 1
                    ? ' asset'
                    : ' assets')),
        h("div", { className: "project-assets-grid" }, assets.map(asset => {
            const assetVersions = getVersionsForAsset(asset, versions);
            const currentVersion = assetVersions.find(version => version.versionId ===
                asset.currentVersionId) ||
                assetVersions[0] ||
                null;
            const unavailable = currentVersion &&
                unavailableVersionIds.has(currentVersion.versionId);
            const downloading = currentVersion &&
                downloadingVersionId ===
                    currentVersion.versionId;
            return (h("article", { className: "project-asset-card", key: asset.assetId },
                h("div", { className: "project-asset-card-header" },
                    h("div", { className: "project-asset-icon" },
                        h(lucide_react_1.Box, { size: 23 })),
                    h("div", { className: "project-asset-title" },
                        h("strong", null, asset.assetName ||
                            'Untitled Asset'),
                        h("span", null, asset.assetType ||
                            'Asset'))),
                h("div", { className: "project-asset-description" }, asset.description ||
                    'No description was provided for this asset.'),
                h("div", { className: "project-asset-meta-grid" },
                    h("div", null,
                        h("span", null, "Category"),
                        h("strong", null, asset.category ||
                            'Not specified')),
                    h("div", null,
                        h("span", null, "Versions"),
                        h("strong", null, assetVersions.length)),
                    h("div", null,
                        h("span", null, "Current Version"),
                        h("strong", null, currentVersion
                            ? `v${currentVersion.versionNumber}`
                            : 'None')),
                    h("div", null,
                        h("span", null, "Added"),
                        h("strong", null, formatDate(asset.createdAt)))),
                h("div", { className: "project-asset-owner" },
                    h(lucide_react_1.UserRound, { size: 16 }),
                    h("span", null, "Added by"),
                    h("strong", null, getUserName(asset.createdBy))),
                asset.tags &&
                    (h("div", { className: "project-asset-tags" },
                        h(lucide_react_1.Tag, { size: 15 }),
                        h("span", null, asset.tags))),
                h("div", { className: "project-asset-current-version" },
                    h("div", null,
                        h(lucide_react_1.FileBox, { size: 18 }),
                        h("span", null, currentVersion
                            ? (h(Fragment, null,
                                "Current file:",
                                ' ',
                                h("strong", null,
                                    "Version ",
                                    currentVersion.versionNumber)))
                            : 'No uploaded version')),
                    unavailable &&
                        (h("span", { className: "asset-file-unavailable" }, "Stored file unavailable"))),
                h("div", { className: "project-asset-actions" },
                    h("button", { type: "button", className: "asset-secondary-action", onClick: () => onOpenVersions(asset.assetId), disabled: assetVersions.length === 0 },
                        h(lucide_react_1.Layers3, { size: 16 }),
                        "View versions"),
                    h("button", { type: "button", className: "asset-primary-action", onClick: () => currentVersion &&
                            onDownloadVersion(currentVersion), disabled: !currentVersion ||
                            unavailable ||
                            downloading },
                        h(lucide_react_1.Download, { size: 16 }),
                        downloading
                            ? 'Downloading...'
                            : 'Download'))));
        }))));
}
exports.default = ClientProjectAssetsTab;

});
__register("src/components/ClientProjectFeedbackTab.jsx",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const clientProjectFeedbackService_1 = require("../services/clientProjectFeedbackService");
require("../styles/ClientProjectFeedbackTab.css");
function formatDateTime(value) {
    if (!value) {
        return 'Date not available';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return 'Date not available';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function formatStatus(status) {
    switch (status) {
        case 'DRAFT':
            return 'Draft';
        case 'FOR_REVIEW':
            return 'For Review';
        case 'REVISION_REQUESTED':
            return 'Revision Requested';
        case 'RENDER_READY':
            return 'Approved / Render Ready';
        default:
            return status
                ? String(status)
                    .replaceAll('_', ' ')
                    .toLowerCase()
                    .replace(/\b\w/g, character => character.toUpperCase())
                : 'Unknown';
    }
}
function getStatusClass(status) {
    switch (status) {
        case 'DRAFT':
            return 'feedback-status-draft';
        case 'FOR_REVIEW':
            return 'feedback-status-review';
        case 'REVISION_REQUESTED':
            return 'feedback-status-revision';
        case 'RENDER_READY':
            return 'feedback-status-approved';
        default:
            return '';
    }
}
function getCommentUser(comment) {
    const user = comment?.user ||
        comment?.createdBy ||
        comment?.commentedBy ||
        comment?.author;
    if (!user) {
        return 'Client';
    }
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`
        .trim();
    return (fullName ||
        user.email ||
        'Client');
}
function getCommentDate(comment) {
    return (comment?.createdAt ||
        comment?.commentedAt ||
        comment?.timestamp ||
        null);
}
function getCommentText(comment) {
    return (comment?.commentText ||
        comment?.feedback ||
        comment?.message ||
        'No feedback text available.');
}
function getAssetName(version, assets) {
    if (version?.asset?.assetName) {
        return version.asset.assetName;
    }
    if (version?.assetName) {
        return version.assetName;
    }
    const versionAssetId = version?.asset?.assetId ||
        version?.assetId;
    const matchedAsset = assets.find(asset => String(asset.assetId) ===
        String(versionAssetId));
    return (matchedAsset?.assetName ||
        'Design Asset');
}
function ClientProjectFeedbackTab({ projectData }) {
    const [feedbackRecords, setFeedbackRecords] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const versions = Array.isArray(projectData?.versions)
        ? projectData.versions
        : [];
    const assets = Array.isArray(projectData?.assets)
        ? projectData.assets
        : [];
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        async function loadFeedback() {
            try {
                setLoading(true);
                const records = await (0, clientProjectFeedbackService_1.loadProjectFeedback)(Array.isArray(projectData?.versions)
                    ? projectData.versions
                    : []);
                if (cancelled) {
                    return;
                }
                setFeedbackRecords(records);
                setError('');
            }
            catch (err) {
                if (cancelled) {
                    return;
                }
                setError(err.message ||
                    'Unable to load project feedback.');
            }
            finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadFeedback();
        return () => {
            cancelled =
                true;
        };
    }, [
        projectData?.versions
    ]);
    const totalComments = feedbackRecords.reduce((total, record) => total +
        record.comments.length, 0);
    const revisionRequests = feedbackRecords.filter(record => record.version?.status ===
        'REVISION_REQUESTED').length;
    const approvedDesigns = feedbackRecords.filter(record => record.version?.status ===
        'RENDER_READY').length;
    if (loading) {
        return (h("section", { className: "project-feedback-state" },
            h(lucide_react_1.RefreshCw, { size: 31 }),
            h("strong", null, "Loading project feedback..."),
            h("span", null, "Retrieving comments and review history for this project.")));
    }
    if (error) {
        return (h("section", { className: "project-feedback-state project-feedback-error" },
            h(lucide_react_1.AlertCircle, { size: 31 }),
            h("strong", null, "Unable to load feedback"),
            h("span", null, error)));
    }
    if (!versions.length) {
        return (h("section", { className: "project-feedback-state" },
            h(lucide_react_1.MessageCircle, { size: 33 }),
            h("strong", null, "No feedback history yet"),
            h("span", null, "Feedback will appear here after design versions are submitted for review.")));
    }
    return (h("section", { className: "project-feedback-tab" },
        h("div", { className: "project-feedback-heading" },
            h("div", null,
                h("h2", null, "Feedback History"),
                h("span", null, "Review comments, revision requests, and approval history for this project.")),
            h("span", { className: "project-feedback-count-pill" },
                feedbackRecords.length,
                ' ',
                feedbackRecords.length ===
                    1
                    ? 'version'
                    : 'versions')),
        h("div", { className: "project-feedback-stats" },
            h("article", null,
                h("div", null,
                    h(lucide_react_1.Layers3, { size: 20 })),
                h("span", null, "Versions"),
                h("strong", null, feedbackRecords.length)),
            h("article", null,
                h("div", null,
                    h(lucide_react_1.MessageCircle, { size: 20 })),
                h("span", null, "Feedback Comments"),
                h("strong", null, totalComments)),
            h("article", null,
                h("div", null,
                    h(lucide_react_1.RotateCcw, { size: 20 })),
                h("span", null, "Revision Requests"),
                h("strong", null, revisionRequests)),
            h("article", null,
                h("div", null,
                    h(lucide_react_1.CheckCircle2, { size: 20 })),
                h("span", null, "Approved Designs"),
                h("strong", null, approvedDesigns))),
        h("div", { className: "project-feedback-list" }, feedbackRecords.map(record => {
            const version = record.version;
            const comments = record.comments;
            const assetName = getAssetName(version, assets);
            return (h("article", { className: "project-feedback-version-card", key: version.versionId },
                h("div", { className: "project-feedback-version-header" },
                    h("div", { className: "project-feedback-version-number" },
                        "v",
                        version.versionNumber),
                    h("div", { className: "project-feedback-version-title" },
                        h("div", null,
                            h("strong", null, assetName),
                            h("span", null,
                                "Version ",
                                version.versionNumber)),
                        h("span", { className: `project-feedback-status ${getStatusClass(version.status)}` }, formatStatus(version.status))),
                    h("div", { className: "project-feedback-version-date" },
                        h(lucide_react_1.Clock3, { size: 13 }),
                        formatDateTime(version.uploadedAt))),
                version.changeNotes &&
                    (h("div", { className: "project-feedback-designer-note" },
                        h("span", null, "Designer Note"),
                        h("p", null, version.changeNotes))),
                version.status ===
                    'REVISION_REQUESTED' &&
                    (h("div", { className: "project-feedback-decision project-feedback-decision-revision" },
                        h(lucide_react_1.RotateCcw, { size: 17 }),
                        h("div", null,
                            h("strong", null, "Revision Requested"),
                            h("span", null, "The client requested changes for this version.")))),
                version.status ===
                    'RENDER_READY' &&
                    (h("div", { className: "project-feedback-decision project-feedback-decision-approved" },
                        h(lucide_react_1.CheckCircle2, { size: 17 }),
                        h("div", null,
                            h("strong", null, "Design Approved"),
                            h("span", null, "This version was approved and marked ready for rendering.")))),
                h("div", { className: "project-feedback-comments" },
                    h("div", { className: "project-feedback-comments-heading" },
                        h(lucide_react_1.MessageCircle, { size: 16 }),
                        h("strong", null, "Client Comments"),
                        h("span", null,
                            comments.length,
                            " comment",
                            comments.length ===
                                1
                                ? ''
                                : 's')),
                    comments.length
                        ? (comments.map((comment, index) => (h("div", { className: "project-feedback-comment", key: comment.commentId ||
                                `${version.versionId}-${index}` },
                            h("div", { className: "project-feedback-comment-meta" },
                                h("strong", null, getCommentUser(comment)),
                                h("span", null, formatDateTime(getCommentDate(comment)))),
                            h("p", null, getCommentText(comment))))))
                        : (h("div", { className: "project-feedback-no-comments" },
                            h(lucide_react_1.MessageCircle, { size: 19 }),
                            h("span", null, "No feedback comments recorded for this version."))))));
        }))));
}
exports.default = ClientProjectFeedbackTab;

});
__register("src/components/ClientProjectFinalOutputTab.jsx",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lucide_react_1 = require("lucide-react");
require("../styles/ClientProjectFinalOutputTab.css");
function formatDateTime(value) {
    if (!value) {
        return 'Not available';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return 'Not available';
    }
    return date.toLocaleString(undefined, {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function getUserDisplayName(user, fallback = 'Not available') {
    if (!user) {
        return fallback;
    }
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`
        .trim();
    return (fullName ||
        user.email ||
        fallback);
}
function ClientProjectFinalOutputTab({ projectData, renderPreviewUrl, renderPreviewType, renderFileState, renderFileMessage, outputAvailable, onViewOutput, onDownloadOutput }) {
    const output = projectData?.latestOutput ||
        null;
    const renderJob = projectData?.latestRenderJob ||
        null;
    const version = renderJob?.version ||
        renderJob?.assetVersion ||
        projectData?.latestVersion ||
        null;
    const fileName = output?.originalFileName ||
        output?.fileName ||
        'Final Render';
    const uploadedBy = output?.uploadedBy ||
        output?.createdBy ||
        renderJob?.submittedBy ||
        projectData?.designer ||
        null;
    const uploadedByName = getUserDisplayName(uploadedBy, projectData?.designerName ||
        'Not available');
    const uploadDate = output?.uploadedAt ||
        output?.createdAt ||
        null;
    const approvedVersion = version?.versionNumber ||
        projectData
            ?.latestVersion
            ?.versionNumber ||
        null;
    if (!output) {
        return (h("section", { className: "client-final-output-empty" },
            h(lucide_react_1.FileImage, { size: 42 }),
            h("strong", null, "No final output yet"),
            h("span", null, "The final render will appear here after the completed render job receives its final output.")));
    }
    return (h("section", { className: "client-final-output-section" },
        h("div", { className: "project-tab-section-heading" },
            h("div", null,
                h("h2", null, "Final Output"),
                h("p", null, "View or download the completed render linked to the approved design version and render job.")),
            h("span", { className: "project-section-count" }, "Available")),
        h("div", { className: "client-final-output-grid" },
            h("article", { className: "client-final-output-preview-card" },
                h("div", { className: "client-final-output-preview" }, renderFileState ===
                    'unavailable'
                    ? (h("div", { className: "client-final-output-unavailable" },
                        h(lucide_react_1.AlertCircle, { size: 48 }),
                        h("strong", null, "Final render file unavailable"),
                        h("span", null, renderFileMessage ===
                            'Stored file does not exist'
                            ? 'A final output record exists, but the stored file can no longer be found.'
                            : renderFileMessage ||
                                'A final output record exists, but the stored file is unavailable.')))
                    : renderPreviewUrl
                        ? (h("img", { src: renderPreviewUrl, alt: `Final render for ${projectData.projectName}` }))
                        : (h("div", { className: "client-final-output-file-placeholder" },
                            h(lucide_react_1.FileImage, { size: 52 }),
                            h("strong", null, "Final Render Available"),
                            h("span", null, renderFileState ===
                                'checking'
                                ? 'Checking final render...'
                                : renderPreviewType
                                    ? 'Preview is not available for this file type. You can still view or download the file.'
                                    : 'The final output is ready to view or download.')))),
                h("div", { className: "client-final-output-file-info" },
                    h("div", null,
                        h("span", null, "Final Render"),
                        h("strong", null, fileName)),
                    h("span", { className: "client-final-output-available-badge" }, "Available")),
                h("div", { className: "client-final-output-actions" },
                    h("button", { type: "button", className: "client-final-output-view-button", onClick: onViewOutput, disabled: !outputAvailable },
                        h(lucide_react_1.ExternalLink, { size: 16 }),
                        "View Full Image"),
                    h("button", { type: "button", className: "client-final-output-download-button", onClick: onDownloadOutput, disabled: !outputAvailable },
                        h(lucide_react_1.Download, { size: 16 }),
                        "Download"))),
            h("article", { className: "client-final-output-details-card" },
                h("div", { className: "client-final-output-details-header" },
                    h("h3", null, "Output Information"),
                    h("span", null, "Final approved render")),
                h("div", { className: "client-final-output-details-list" },
                    h("div", null,
                        h("span", null, "Project Name"),
                        h("strong", null, projectData.projectName ||
                            'Not available')),
                    h("div", null,
                        h("span", null, "Asset"),
                        h("strong", null, version?.asset?.assetName ||
                            projectData
                                ?.latestVersion
                                ?.asset
                                ?.assetName ||
                            'Not available')),
                    h("div", null,
                        h("span", null, "Approved Version"),
                        h("strong", null, approvedVersion
                            ? `v${approvedVersion}`
                            : 'Not available')),
                    h("div", null,
                        h("span", null, "Render Job ID"),
                        h("strong", null, renderJob?.renderJobId
                            ? `R-${String(renderJob.renderJobId).padStart(3, '0')}`
                            : 'Not available')),
                    h("div", null,
                        h("span", null, "Uploaded By"),
                        h("strong", null, uploadedByName)),
                    h("div", null,
                        h("span", null, "Upload Date"),
                        h("strong", null, formatDateTime(uploadDate))),
                    h("div", null,
                        h("span", null, "Status"),
                        h("strong", { className: "client-final-output-status" }, renderFileState ===
                            'unavailable'
                            ? 'File Unavailable'
                            : 'Final Output Available'))),
                h("div", { className: "client-final-output-trace-note" }, "This final output is linked to the approved design version and its completed render job for traceability.")))));
}
exports.default = ClientProjectFinalOutputTab;

});
__register("src/components/ClientProjectRenderJobsTab.jsx",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lucide_react_1 = require("lucide-react");
require("../styles/ClientProjectRenderJobsTab.css");
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function formatStatus(value) {
    if (!value) {
        return 'Unknown';
    }
    return String(value)
        .replaceAll('_', ' ')
        .toLowerCase()
        .replace(/\b\w/g, character => character.toUpperCase());
}
function getUserName(user) {
    if (!user) {
        return 'Unknown';
    }
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`
        .trim();
    return (fullName ||
        user.email ||
        'Unknown');
}
function getVersionNumber(job) {
    return (job?.version?.versionNumber ??
        job?.assetVersion?.versionNumber ??
        '—');
}
function getAssetName(job) {
    return (job?.version?.asset?.assetName ||
        job?.assetVersion?.asset?.assetName ||
        'Design Asset');
}
function ClientProjectRenderJobsTab({ projectData, onOpenFinalOutput }) {
    const renderJobs = Array.isArray(projectData?.renderJobs)
        ? projectData.renderJobs
        : [];
    const sortedJobs = [...renderJobs].sort((a, b) => new Date(b.submittedAt ||
        b.updatedAt ||
        0).getTime() -
        new Date(a.submittedAt ||
            a.updatedAt ||
            0).getTime());
    const counts = {
        total: renderJobs.length,
        queued: renderJobs.filter(job => job.status ===
            'QUEUED').length,
        rendering: renderJobs.filter(job => job.status ===
            'RENDERING').length,
        completed: renderJobs.filter(job => job.status ===
            'COMPLETED').length,
        failed: renderJobs.filter(job => job.status ===
            'FAILED').length
    };
    const latestOutputJobId = projectData
        ?.latestRenderJob
        ?.renderJobId;
    const hasLatestOutput = Boolean(projectData?.latestOutput);
    if (!renderJobs.length) {
        return (h("section", { className: "project-render-jobs-empty" },
            h(lucide_react_1.ListChecks, { size: 34 }),
            h("strong", null, "No render jobs yet"),
            h("span", null, "Render jobs will appear here after an approved design is submitted to the Render Queue.")));
    }
    return (h("section", { className: "project-render-jobs-tab" },
        h("div", { className: "project-render-jobs-heading" },
            h("div", null,
                h("h2", null, "Render Jobs"),
                h("span", null, "Track the render history for approved versions in this project.")),
            h("span", { className: "project-render-jobs-count-pill" },
                counts.total,
                ' ',
                counts.total ===
                    1
                    ? 'job'
                    : 'jobs')),
        h("div", { className: "project-render-jobs-stats" },
            h("article", null,
                h("div", null,
                    h(lucide_react_1.ListChecks, { size: 18 })),
                h("span", null, "Total Jobs"),
                h("strong", null, counts.total)),
            h("article", null,
                h("div", null,
                    h(lucide_react_1.Clock3, { size: 18 })),
                h("span", null, "Queued"),
                h("strong", null, counts.queued)),
            h("article", null,
                h("div", null,
                    h(lucide_react_1.RefreshCw, { size: 18 })),
                h("span", null, "Rendering"),
                h("strong", null, counts.rendering)),
            h("article", null,
                h("div", null,
                    h(lucide_react_1.CheckCircle2, { size: 18 })),
                h("span", null, "Completed"),
                h("strong", null, counts.completed)),
            h("article", null,
                h("div", null,
                    h(lucide_react_1.CircleX, { size: 18 })),
                h("span", null, "Failed"),
                h("strong", null, counts.failed))),
        h("div", { className: "project-render-jobs-table-card" },
            h("div", { className: "project-render-jobs-table-wrap" },
                h("table", { className: "project-render-jobs-table" },
                    h("thead", null,
                        h("tr", null,
                            h("th", null, "Job ID"),
                            h("th", null, "Design"),
                            h("th", null, "Approved Version"),
                            h("th", null, "Submitted By"),
                            h("th", null, "Priority"),
                            h("th", null, "Status"),
                            h("th", null, "Date Submitted"),
                            h("th", null, "Completion Date"),
                            h("th", null, "Action"))),
                    h("tbody", null, sortedJobs.map(job => {
                        const hasOutput = hasLatestOutput &&
                            String(job.renderJobId) ===
                                String(latestOutputJobId);
                        return (h("tr", { key: job.renderJobId },
                            h("td", null,
                                h("strong", { className: "project-render-job-id" },
                                    "R-",
                                    String(job.renderJobId).padStart(3, '0'))),
                            h("td", null,
                                h("strong", { className: "project-render-design-name" }, getAssetName(job))),
                            h("td", null,
                                h("span", { className: "project-render-version" },
                                    "v",
                                    getVersionNumber(job))),
                            h("td", null, getUserName(job.submittedBy)),
                            h("td", null,
                                h("span", { className: `project-render-priority project-render-priority-${String(job.priority ||
                                        '').toLowerCase()}` }, formatStatus(job.priority))),
                            h("td", null,
                                h("span", { className: `project-render-status project-render-status-${String(job.status ||
                                        '').toLowerCase()}` },
                                    h("i", null),
                                    formatStatus(job.status))),
                            h("td", null, formatDateTime(job.submittedAt)),
                            h("td", null, formatDateTime(job.completedAt)),
                            h("td", null, hasOutput
                                ? (h("button", { type: "button", className: "project-render-output-button", onClick: onOpenFinalOutput },
                                    h(lucide_react_1.ExternalLink, { size: 14 }),
                                    "Final Output"))
                                : job.status ===
                                    'COMPLETED'
                                    ? (h("span", { className: "project-render-completed-note" }, "Completed"))
                                    : (h("span", { className: "project-render-no-action" }, "\u2014")))));
                    })))))));
}
exports.default = ClientProjectRenderJobsTab;

});
__register("src/components/ClientProjectVersionsTab.jsx",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lucide_react_1 = require("lucide-react");
const VERSION_STATUS = {
    DRAFT: {
        label: 'Draft',
        className: 'version-status-draft'
    },
    FOR_REVIEW: {
        label: 'For review',
        className: 'version-status-review'
    },
    REVISION_REQUESTED: {
        label: 'Revision requested',
        className: 'version-status-revision'
    },
    APPROVED: {
        label: 'Approved',
        className: 'version-status-approved'
    },
    RENDER_READY: {
        label: 'Render ready',
        className: 'version-status-ready'
    }
};
function formatDateTime(value) {
    if (!value) {
        return 'Not available';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return 'Not available';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function getUserName(user) {
    if (!user) {
        return 'Unknown';
    }
    const firstName = user.firstName?.trim() || '';
    const lastName = user.lastName?.trim() || '';
    const fullName = `${firstName} ${lastName}`.trim();
    return (fullName ||
        user.email ||
        'Unknown');
}
function ClientProjectVersionsTab({ versions, assetFilterId, onClearAssetFilter, downloadingVersionId, unavailableVersionIds, onDownloadVersion }) {
    const orderedVersions = versions
        .slice()
        .sort((a, b) => new Date(b.uploadedAt || 0) -
        new Date(a.uploadedAt || 0));
    const visibleVersions = assetFilterId
        ? orderedVersions.filter(version => version?.asset?.assetId ===
            assetFilterId)
        : orderedVersions;
    const selectedAssetName = assetFilterId
        ? versions.find(version => version?.asset?.assetId ===
            assetFilterId)?.asset?.assetName
        : null;
    if (!versions.length) {
        return (h("section", { className: "project-tab-empty" },
            h(lucide_react_1.FileClock, { size: 38 }),
            h("strong", null, "No version history yet"),
            h("span", null, "Uploaded design versions will appear here once they are added to this project.")));
    }
    return (h("section", { className: "project-versions-section" },
        h("div", { className: "project-tab-section-heading" },
            h("div", null,
                h("h2", null, "Version History"),
                h("p", null, "Review every uploaded version and its current workflow status.")),
            h("span", { className: "project-section-count" },
                visibleVersions.length,
                visibleVersions.length === 1
                    ? ' version'
                    : ' versions')),
        assetFilterId &&
            (h("div", { className: "version-active-filter" },
                h("span", null,
                    "Showing versions for",
                    ' ',
                    h("strong", null, selectedAssetName ||
                        'selected asset')),
                h("button", { type: "button", onClick: onClearAssetFilter }, "Show all versions"))),
        h("div", { className: "project-versions-card" },
            h("div", { className: "project-versions-header" },
                h("span", null, "Version"),
                h("span", null, "Asset"),
                h("span", null, "Status"),
                h("span", null, "Uploaded By"),
                h("span", null, "Uploaded"),
                h("span", null, "Change Notes"),
                h("span", null)),
            visibleVersions.map(version => {
                const status = VERSION_STATUS[version.status] || {
                    label: version.status ||
                        'Unknown',
                    className: 'version-status-draft'
                };
                const unavailable = unavailableVersionIds.has(version.versionId);
                const downloading = downloadingVersionId ===
                    version.versionId;
                return (h("article", { className: "project-version-row", key: version.versionId },
                    h("div", { className: "version-number-cell" },
                        h(lucide_react_1.FileText, { size: 19 }),
                        h("strong", null,
                            "v",
                            version.versionNumber)),
                    h("div", { className: "version-asset-cell" },
                        h("strong", null, version?.asset
                            ?.assetName ||
                            'Project Asset')),
                    h("div", null,
                        h("span", { className: `version-status-badge ${status.className}` },
                            h("span", { className: "version-status-dot" }),
                            status.label)),
                    h("div", { className: "version-user-cell" },
                        h(lucide_react_1.UserRound, { size: 18 }),
                        h("span", null, getUserName(version.uploadedBy))),
                    h("div", { className: "version-date-cell" }, formatDateTime(version.uploadedAt)),
                    h("div", { className: "version-notes-cell" },
                        version.changeNotes ||
                            'No change notes.',
                        unavailable &&
                            (h("span", { className: "version-file-warning" }, "Stored file unavailable"))),
                    h("div", { className: "version-action-cell" },
                        h("button", { type: "button", className: "version-download-button", onClick: () => onDownloadVersion(version), disabled: unavailable ||
                                downloading },
                            h(lucide_react_1.Download, { size: 16 }),
                            downloading
                                ? '...'
                                : 'Download'))));
            }))));
}
exports.default = ClientProjectVersionsTab;

});
__register("src/components/ClientSidebar.jsx",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const lucide_react_1 = require("lucide-react");
function ClientSidebar({ isOpen, onClose }) {
    return (h(Fragment, null,
        isOpen &&
            (h("button", { type: "button", className: "sidebar-backdrop", onClick: onClose, "aria-label": "Close sidebar" })),
        h("aside", { className: isOpen
                ? 'dashboard-sidebar sidebar-open'
                : 'dashboard-sidebar' },
            h("div", { className: "sidebar-header" },
                h("div", { className: "sidebar-brand" }, "InteriorSync"),
                h("button", { type: "button", className: "sidebar-close-button", onClick: onClose, "aria-label": "Close sidebar" },
                    h(lucide_react_1.X, { size: 22 }))),
            h("nav", { className: "sidebar-navigation" },
                h(react_router_dom_1.NavLink, { to: "/client/dashboard", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.LayoutDashboard, { size: 22 }),
                    h("span", null, "Dashboard")),
                h("p", { className: "sidebar-section-title" }, "Project Intake"),
                h(react_router_dom_1.NavLink, { to: "/client/consultations", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.ClipboardList, { size: 22 }),
                    h("span", null, "Consultation")),
                h(react_router_dom_1.NavLink, { to: "/client/projects", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.Folder, { size: 22 }),
                    h("span", null, "Projects")),
                h("p", { className: "sidebar-section-title" }, "Library"),
                h(react_router_dom_1.NavLink, { to: "/client/assets", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.Layers3, { size: 22 }),
                    h("span", null, "Asset Library")),
                h(react_router_dom_1.NavLink, { to: "/client/versions", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.History, { size: 22 }),
                    h("span", null, "Version History")),
                h("p", { className: "sidebar-section-title" }, "Production"),
                h(react_router_dom_1.NavLink, { to: "/client/render-queue", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.ListChecks, { size: 22 }),
                    h("span", null, "Render Queue")),
                h(react_router_dom_1.NavLink, { to: "/client/feedback", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.MessageCircle, { size: 22 }),
                    h("span", null, "Client Feedback")),
                h("p", { className: "sidebar-section-title" }, "Workspace"),
                h(react_router_dom_1.NavLink, { to: "/client/notifications", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.Bell, { size: 22 }),
                    h("span", null, "Notifications"))))));
}
exports.default = ClientSidebar;

});
__register("src/components/DesignerSidebar.jsx",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const lucide_react_1 = require("lucide-react");
function DesignerSidebar({ isOpen, onClose }) {
    return (h(Fragment, null,
        isOpen &&
            (h("button", { type: "button", className: "sidebar-backdrop", onClick: onClose, "aria-label": "Close sidebar" })),
        h("aside", { className: isOpen
                ? 'dashboard-sidebar sidebar-open'
                : 'dashboard-sidebar' },
            h("div", { className: "sidebar-header" },
                h("div", { className: "sidebar-brand" }, "InteriorSync"),
                h("button", { type: "button", className: "sidebar-close-button", onClick: onClose, "aria-label": "Close sidebar" },
                    h(lucide_react_1.X, { size: 22 }))),
            h("nav", { className: "sidebar-navigation" },
                h(react_router_dom_1.NavLink, { to: "/designer/dashboard", end: true, className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.LayoutDashboard, { size: 22 }),
                    h("span", null, "Dashboard")),
                h(react_router_dom_1.NavLink, { to: "/designer/projects", end: true, className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.Folder, { size: 22 }),
                    h("span", null, "Projects")),
                h("p", { className: "sidebar-section-title" }, "Library"),
                h(react_router_dom_1.NavLink, { to: "/designer/assets", end: true, className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.Boxes, { size: 22 }),
                    h("span", null, "Asset Library")),
                h(react_router_dom_1.NavLink, { to: "/designer/assets/upload", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.Upload, { size: 22 }),
                    h("span", null, "Upload Asset")),
                h(react_router_dom_1.NavLink, { to: "/designer/versions/upload", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.FilePlus2, { size: 22 }),
                    h("span", null, "Upload New Version")),
                h(react_router_dom_1.NavLink, { to: "/designer/versions", end: true, className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.History, { size: 22 }),
                    h("span", null, "Version History")),
                h("p", { className: "sidebar-section-title" }, "Production"),
                h(react_router_dom_1.NavLink, { to: "/designer/render-queue", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.ListChecks, { size: 22 }),
                    h("span", null, "Render Queue")),
                h(react_router_dom_1.NavLink, { to: "/designer/feedback", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.MessageCircle, { size: 22 }),
                    h("span", null, "Client Feedback")),
                h("p", { className: "sidebar-section-title" }, "Workspace"),
                h(react_router_dom_1.NavLink, { to: "/designer/notifications", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.Bell, { size: 22 }),
                    h("span", null, "Notifications"))))));
}
exports.default = DesignerSidebar;

});
__register("src/components/ErrorState.jsx",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lucide_react_1 = require("lucide-react");
const ERROR_ICONS = {
    access: lucide_react_1.Ban,
    notFound: lucide_react_1.FileQuestion,
    failed: lucide_react_1.AlertTriangle,
    generic: lucide_react_1.AlertTriangle
};
function ErrorState({ type = 'generic', code = null, title, message, primaryActionLabel, onPrimaryAction, secondaryActionLabel, onSecondaryAction, compact = false }) {
    const Icon = ERROR_ICONS[type] ||
        ERROR_ICONS.generic;
    return (h("section", { className: compact
            ? 'error-state error-state-compact'
            : 'error-state' },
        code &&
            (h("span", { className: "error-state-code" }, code)),
        h("div", { className: "error-state-icon" },
            h(Icon, { size: 30 })),
        h("h2", null, title),
        h("p", null, message),
        (primaryActionLabel ||
            secondaryActionLabel) &&
            (h("div", { className: "error-state-actions" },
                primaryActionLabel &&
                    (h("button", { type: "button", className: "error-state-primary", onClick: onPrimaryAction },
                        h(lucide_react_1.RefreshCw, { size: 16 }),
                        primaryActionLabel)),
                secondaryActionLabel &&
                    (h("button", { type: "button", className: "error-state-secondary", onClick: onSecondaryAction },
                        h(lucide_react_1.ArrowLeft, { size: 16 }),
                        secondaryActionLabel))))));
}
exports.default = ErrorState;

});
__register("src/components/ProjectManagerSidebar.jsx",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const lucide_react_1 = require("lucide-react");
function ProjectManagerSidebar({ isOpen, onClose }) {
    return (h(Fragment, null,
        isOpen &&
            (h("button", { type: "button", className: "sidebar-backdrop", onClick: onClose, "aria-label": "Close sidebar" })),
        h("aside", { className: isOpen
                ? 'dashboard-sidebar sidebar-open'
                : 'dashboard-sidebar' },
            h("div", { className: "sidebar-header" },
                h("div", { className: "sidebar-brand" }, "InteriorSync"),
                h("button", { type: "button", className: "sidebar-close-button", onClick: onClose, "aria-label": "Close sidebar" },
                    h(lucide_react_1.X, { size: 22 }))),
            h("nav", { className: "sidebar-navigation" },
                h(react_router_dom_1.NavLink, { to: "/manager/dashboard", end: true, className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.LayoutDashboard, { size: 22 }),
                    h("span", null, "Dashboard")),
                h("p", { className: "sidebar-section-title" }, "Project Intake"),
                h(react_router_dom_1.NavLink, { to: "/manager/consultations", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.ClipboardList, { size: 22 }),
                    h("span", null, "Consultations")),
                h("p", { className: "sidebar-section-title" }, "Projects"),
                h(react_router_dom_1.NavLink, { to: "/manager/projects", end: true, className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.Folder, { size: 22 }),
                    h("span", null, "Projects")),
                h(react_router_dom_1.NavLink, { to: "/manager/projects/create", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.FolderPlus, { size: 22 }),
                    h("span", null, "Create Project")),
                h(react_router_dom_1.NavLink, { to: "/manager/project-activity", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.FileClock, { size: 22 }),
                    h("span", null, "Project Activity")),
                h("p", { className: "sidebar-section-title" }, "Production"),
                h(react_router_dom_1.NavLink, { to: "/manager/render-queue", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.ListChecks, { size: 22 }),
                    h("span", null, "Render Queue")),
                h("p", { className: "sidebar-section-title" }, "Monitoring"),
                h(react_router_dom_1.NavLink, { to: "/manager/audit-log", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.ScrollText, { size: 22 }),
                    h("span", null, "Audit Log")),
                h(react_router_dom_1.NavLink, { to: "/manager/reports", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.BarChart3, { size: 22 }),
                    h("span", null, "Reports")),
                h("p", { className: "sidebar-section-title" }, "Workspace"),
                h(react_router_dom_1.NavLink, { to: "/manager/notifications", className: ({ isActive }) => isActive
                        ? 'sidebar-link sidebar-link-active'
                        : 'sidebar-link' },
                    h(lucide_react_1.Bell, { size: 22 }),
                    h("span", null, "Notifications"))))));
}
exports.default = ProjectManagerSidebar;

});
__register("src/components/ProtectedRoute.jsx",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const authService_1 = require("../services/authService");
function ProtectedRoute({ children, allowedRoles = [] }) {
    if (!(0, authService_1.isAuthenticated)()) {
        return (h(react_router_dom_1.Navigate, { to: "/login", replace: true }));
    }
    if (allowedRoles.length > 0 &&
        !(0, authService_1.hasRole)(allowedRoles)) {
        return (h(react_router_dom_1.Navigate, { to: (0, authService_1.getDefaultRouteForRole)(), replace: true }));
    }
    return children;
}
exports.default = ProtectedRoute;

});
__register("src/components/RoleHomeRedirect.jsx",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const authService_1 = require("../services/authService");
function RoleHomeRedirect() {
    if (!(0, authService_1.isAuthenticated)()) {
        return (h(react_router_dom_1.Navigate, { to: "/login", replace: true }));
    }
    return (h(react_router_dom_1.Navigate, { to: (0, authService_1.getDefaultRouteForRole)(), replace: true }));
}
exports.default = RoleHomeRedirect;

});
__register("src/main.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
const App_jsx_1 = __importDefault(require("./App.jsx"));
require("./index.css");
(0, client_1.createRoot)(document.getElementById('root')).render(h(react_1.StrictMode, null,
    h(App_jsx_1.default, null)));

});
__register("src/pages/AccessDeniedPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const ErrorState_1 = __importDefault(require("../components/ErrorState"));
const authService_1 = require("../services/authService");
require("../styles/Dashboard.css");
require("../styles/ErrorState.css");
require("../styles/SystemErrorPage.css");
function AccessDeniedPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const location = (0, react_router_dom_1.useLocation)();
    const customMessage = location.state?.message;
    function handleDashboard() {
        navigate((0, authService_1.getDefaultRouteForRole)(), {
            replace: true
        });
    }
    function handleBack() {
        navigate(-1);
    }
    return (h("main", { className: "system-error-page" },
        h("div", { className: "system-error-brand" }, "InteriorSync"),
        h("div", { className: "system-error-container" },
            h(ErrorState_1.default, { type: "access", code: "403", title: "Access Denied", message: customMessage ||
                    'You do not have permission to access this project or resource.', primaryActionLabel: "Go to Dashboard", onPrimaryAction: handleDashboard, secondaryActionLabel: "Go Back", onSecondaryAction: handleBack }))));
}
exports.default = AccessDeniedPage;

});
__register("src/pages/AdminDashboard.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const AdminSidebar_1 = __importDefault(require("../components/AdminSidebar"));
const authService_1 = require("../services/authService");
const adminDashboardService_1 = require("../services/adminDashboardService");
require("../styles/Dashboard.css");
require("../styles/AdminDashboard.css");
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function formatRole(role) {
    if (!role) {
        return 'Unknown';
    }
    return role
        .replaceAll('_', ' ')
        .toLowerCase()
        .replace(/\b\w/g, character => character.toUpperCase());
}
function formatAction(action) {
    if (!action) {
        return 'System Activity';
    }
    return action
        .replaceAll('_', ' ')
        .toLowerCase()
        .replace(/\b\w/g, character => character.toUpperCase());
}
function getUserName(user) {
    if (!user) {
        return 'System';
    }
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`
        .trim();
    return (fullName ||
        user.email ||
        'System');
}
function getRoleName(user) {
    if (typeof user?.role ===
        'string') {
        return user.role;
    }
    return (user
        ?.role
        ?.roleName ||
        'UNKNOWN');
}
function AdminDashboard() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [dashboardData, setDashboardData] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const email = (0, authService_1.getStoredEmail)() || '';
    const adminName = (0, authService_1.getStoredDisplayName)('Admin');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        (0, adminDashboardService_1.loadAdminDashboard)()
            .then(data => {
            if (cancelled) {
                return;
            }
            setDashboardData(data);
            setError('');
        })
            .catch(err => {
            if (cancelled) {
                return;
            }
            if (err.message ===
                'Your session has expired. Please log in again.') {
                navigate('/login', {
                    replace: true
                });
                return;
            }
            setError(err.message ||
                'Unable to load Administrator dashboard.');
        })
            .finally(() => {
            if (cancelled) {
                return;
            }
            setLoading(false);
        });
        return () => {
            cancelled = true;
        };
    }, [navigate]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    const counts = dashboardData?.counts || {
        totalUsers: 0,
        activeAccounts: 0,
        administrators: 0,
        projectManagers: 0,
        designers: 0,
        clients: 0,
        auditEvents: 0
    };
    const stats = [
        {
            label: 'Total Users',
            value: counts.totalUsers,
            icon: lucide_react_1.Users
        },
        {
            label: 'Active Accounts',
            value: counts.activeAccounts,
            icon: lucide_react_1.UserCheck
        },
        {
            label: 'Administrators',
            value: counts.administrators,
            icon: lucide_react_1.ShieldCheck
        },
        {
            label: 'Project Managers',
            value: counts.projectManagers,
            icon: lucide_react_1.UserCog
        },
        {
            label: 'Interior Designers',
            value: counts.designers,
            icon: lucide_react_1.UsersRound
        },
        {
            label: 'Clients',
            value: counts.clients,
            icon: lucide_react_1.CircleUserRound
        },
        {
            label: 'Audit Events',
            value: counts.auditEvents,
            icon: lucide_react_1.ClipboardList
        }
    ];
    return (h("div", { className: "dashboard-page" },
        h(AdminSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.CircleUserRound, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, adminName),
                                    h("span", null, email),
                                    h("small", null, "Administrator")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "admin-dashboard-main" },
                error &&
                    (h("div", { className: "dashboard-error" }, error)),
                h("section", { className: "admin-welcome-banner" },
                    h("div", { className: "admin-welcome-overlay" }),
                    h("div", { className: "admin-welcome-content" },
                        h("p", null, "System Administration Workspace"),
                        h("h1", null,
                            "Welcome, ",
                            adminName),
                        h("span", null, "Manage user access, monitor system activity, review audit records, and maintain InteriorSync configuration."))),
                h("section", { className: "admin-stats-grid" }, stats.map(stat => {
                    const Icon = stat.icon;
                    return (h("article", { className: "admin-stat-card", key: stat.label },
                        h("div", { className: "admin-stat-icon" },
                            h(Icon, { size: 21 })),
                        h("div", null,
                            h("span", null, stat.label),
                            h("strong", null, loading
                                ? '—'
                                : stat.value))));
                })),
                h("section", { className: "admin-dashboard-grid" },
                    h("article", { className: "admin-dashboard-panel admin-users-panel" },
                        h("div", { className: "admin-panel-header" },
                            h("div", null,
                                h("h2", null, "User Overview"),
                                h("span", null, "Recently created InteriorSync accounts.")),
                            h(lucide_react_1.Users, { size: 20 })),
                        h("div", { className: "admin-user-list" }, loading
                            ? (h("div", { className: "admin-panel-state" }, "Loading users..."))
                            : dashboardData
                                ?.users
                                ?.length
                                ? (dashboardData.users
                                    .slice(0, 6)
                                    .map(user => (h("div", { className: "admin-user-row", key: user.userId },
                                    h("div", { className: "admin-user-avatar" },
                                        h(lucide_react_1.UserRound, { size: 18 })),
                                    h("div", { className: "admin-user-info" },
                                        h("strong", null, getUserName(user)),
                                        h("span", null, user.email)),
                                    h("div", { className: "admin-user-meta" },
                                        h("span", { className: "admin-role-badge" }, formatRole(getRoleName(user))),
                                        h("small", { className: user.status ===
                                                'ACTIVE'
                                                ? 'admin-account-status admin-account-active'
                                                : 'admin-account-status' }, formatRole(user.status)))))))
                                : (h("div", { className: "admin-panel-state" },
                                    h(lucide_react_1.Users, { size: 27 }),
                                    h("span", null, "No user accounts."))))),
                    h("article", { className: "admin-dashboard-panel" },
                        h("div", { className: "admin-panel-header" },
                            h("div", null,
                                h("h2", null, "Recent System Activity"),
                                h("span", null, "Latest recorded audit events.")),
                            h(lucide_react_1.Activity, { size: 20 })),
                        h("div", { className: "admin-activity-list" }, loading
                            ? (h("div", { className: "admin-panel-state" }, "Loading system activity..."))
                            : dashboardData
                                ?.recentAuditLogs
                                ?.length
                                ? (dashboardData
                                    .recentAuditLogs
                                    .map(log => (h("div", { className: "admin-activity-row", key: log.id },
                                    h("div", { className: "admin-activity-icon" },
                                        h(lucide_react_1.Activity, { size: 17 })),
                                    h("div", { className: "admin-activity-info" },
                                        h("strong", null, formatAction(log.action)),
                                        h("span", null,
                                            getUserName(log.user),
                                            ' · ',
                                            log.target),
                                        h("small", null, formatDateTime(log.timestamp)))))))
                                : (h("div", { className: "admin-panel-state" },
                                    h(lucide_react_1.Activity, { size: 27 }),
                                    h("span", null, "No audit activity recorded."))))),
                    h("article", { className: "admin-dashboard-panel" },
                        h("div", { className: "admin-panel-header" },
                            h("div", null,
                                h("h2", null, "Account Distribution"),
                                h("span", null, "Users grouped by system role.")),
                            h(lucide_react_1.ShieldCheck, { size: 20 })),
                        h("div", { className: "admin-role-list" }, loading
                            ? (h("div", { className: "admin-panel-state" }, "Loading account distribution..."))
                            : dashboardData
                                ?.roleDistribution
                                ?.map(item => (h("div", { className: "admin-role-row", key: item.role },
                                h("div", { className: "admin-role-icon" },
                                    h(lucide_react_1.UserRound, { size: 18 })),
                                h("div", null,
                                    h("span", null, item.role),
                                    h("strong", null, item.count)))))),
                        h("div", { className: "admin-management-note" },
                            h(lucide_react_1.ShieldCheck, { size: 19 }),
                            h("p", null, "Administrator access is limited to system-level management and monitoring. Normal project operations remain assigned to Project Managers, Interior Designers, and Clients."))))))));
}
exports.default = AdminDashboard;

});
__register("src/pages/AdminRolesAccessPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const AdminSidebar_1 = __importDefault(require("../components/AdminSidebar"));
const authService_1 = require("../services/authService");
const adminRolesAccessService_1 = require("../services/adminRolesAccessService");
require("../styles/Dashboard.css");
require("../styles/AdminRolesAccess.css");
const ROLE_DEFINITIONS = [
    {
        roleName: 'ADMIN',
        title: 'Administrator',
        shortTitle: 'Admin',
        description: 'Manages system accounts, access control, audit monitoring, and administration.',
        scope: 'System Level'
    },
    {
        roleName: 'PROJECT_MANAGER',
        title: 'Project Manager',
        shortTitle: 'Project Manager',
        description: 'Creates and manages projects, assigns participants, monitors workflow, and delivers completed projects.',
        scope: 'Project Management'
    },
    {
        roleName: 'INTERIOR_DESIGNER',
        title: 'Interior Designer',
        shortTitle: 'Designer',
        description: 'Works on assigned projects, uploads assets and versions, handles revisions, and manages render production.',
        scope: 'Assigned Projects'
    },
    {
        roleName: 'CLIENT',
        title: 'Client',
        shortTitle: 'Client',
        description: 'Reviews assigned projects, provides feedback, requests revisions, approves designs, and accesses final outputs.',
        scope: 'Assigned Projects'
    }
];
const ACCESS_MATRIX = [
    {
        module: 'User Accounts',
        description: 'View and create InteriorSync accounts.',
        ADMIN: {
            label: 'Create / View',
            type: 'full'
        },
        PROJECT_MANAGER: {
            label: 'No Access',
            type: 'none'
        },
        INTERIOR_DESIGNER: {
            label: 'No Access',
            type: 'none'
        },
        CLIENT: {
            label: 'No Access',
            type: 'none'
        }
    },
    {
        module: 'Project Creation',
        description: 'Create project workspaces and assign participants.',
        ADMIN: {
            label: 'No Project Operations',
            type: 'none'
        },
        PROJECT_MANAGER: {
            label: 'Manage',
            type: 'full'
        },
        INTERIOR_DESIGNER: {
            label: 'No Access',
            type: 'none'
        },
        CLIENT: {
            label: 'No Access',
            type: 'none'
        }
    },
    {
        module: 'Project Workspace',
        description: 'Access project information and workflow records.',
        ADMIN: {
            label: 'No Project Operations',
            type: 'none'
        },
        PROJECT_MANAGER: {
            label: 'Manage / Monitor',
            type: 'full'
        },
        INTERIOR_DESIGNER: {
            label: 'Assigned Only',
            type: 'limited'
        },
        CLIENT: {
            label: 'Assigned Only',
            type: 'limited'
        }
    },
    {
        module: 'Asset Library',
        description: 'Access project-based design assets.',
        ADMIN: {
            label: 'No Project Operations',
            type: 'none'
        },
        PROJECT_MANAGER: {
            label: 'Monitor',
            type: 'monitor'
        },
        INTERIOR_DESIGNER: {
            label: 'Manage Assigned',
            type: 'full'
        },
        CLIENT: {
            label: 'View Assigned',
            type: 'limited'
        }
    },
    {
        module: 'Asset Upload',
        description: 'Upload supported project design files.',
        ADMIN: {
            label: 'No Access',
            type: 'none'
        },
        PROJECT_MANAGER: {
            label: 'Monitor',
            type: 'monitor'
        },
        INTERIOR_DESIGNER: {
            label: 'Allowed',
            type: 'full'
        },
        CLIENT: {
            label: 'No Access',
            type: 'none'
        }
    },
    {
        module: 'Version Control',
        description: 'Upload and manage design versions.',
        ADMIN: {
            label: 'No Access',
            type: 'none'
        },
        PROJECT_MANAGER: {
            label: 'Monitor',
            type: 'monitor'
        },
        INTERIOR_DESIGNER: {
            label: 'Manage',
            type: 'full'
        },
        CLIENT: {
            label: 'View',
            type: 'limited'
        }
    },
    {
        module: 'Client Feedback',
        description: 'Review comments and revision requests.',
        ADMIN: {
            label: 'No Access',
            type: 'none'
        },
        PROJECT_MANAGER: {
            label: 'Monitor',
            type: 'monitor'
        },
        INTERIOR_DESIGNER: {
            label: 'View / Respond',
            type: 'full'
        },
        CLIENT: {
            label: 'Create Feedback',
            type: 'full'
        }
    },
    {
        module: 'Design Approval',
        description: 'Approve submitted versions or request revisions.',
        ADMIN: {
            label: 'No Access',
            type: 'none'
        },
        PROJECT_MANAGER: {
            label: 'Monitor',
            type: 'monitor'
        },
        INTERIOR_DESIGNER: {
            label: 'View Decision',
            type: 'limited'
        },
        CLIENT: {
            label: 'Approve / Revise',
            type: 'full'
        }
    },
    {
        module: 'Render Queue',
        description: 'Submit and track render jobs.',
        ADMIN: {
            label: 'No Project Operations',
            type: 'none'
        },
        PROJECT_MANAGER: {
            label: 'Monitor',
            type: 'monitor'
        },
        INTERIOR_DESIGNER: {
            label: 'Submit / Update',
            type: 'full'
        },
        CLIENT: {
            label: 'View Assigned',
            type: 'limited'
        }
    },
    {
        module: 'Final Output',
        description: 'Upload or access completed render outputs.',
        ADMIN: {
            label: 'No Project Operations',
            type: 'none'
        },
        PROJECT_MANAGER: {
            label: 'Monitor',
            type: 'monitor'
        },
        INTERIOR_DESIGNER: {
            label: 'Upload',
            type: 'full'
        },
        CLIENT: {
            label: 'View / Download',
            type: 'limited'
        }
    },
    {
        module: 'Project Delivery',
        description: 'Mark completed projects as delivered.',
        ADMIN: {
            label: 'No Access',
            type: 'none'
        },
        PROJECT_MANAGER: {
            label: 'Allowed',
            type: 'full'
        },
        INTERIOR_DESIGNER: {
            label: 'No Access',
            type: 'none'
        },
        CLIENT: {
            label: 'No Access',
            type: 'none'
        }
    },
    {
        module: 'Audit Log',
        description: 'Review recorded system and project actions.',
        ADMIN: {
            label: 'System Wide',
            type: 'full'
        },
        PROJECT_MANAGER: {
            label: 'Relevant Records',
            type: 'monitor'
        },
        INTERIOR_DESIGNER: {
            label: 'No Access',
            type: 'none'
        },
        CLIENT: {
            label: 'No Access',
            type: 'none'
        }
    }
];
function AccessBadge({ access }) {
    return (h("span", { className: `admin-access-badge admin-access-${access.type}` },
        access.type ===
            'none'
            ? (h(lucide_react_1.LockKeyhole, { size: 12 }))
            : (h(lucide_react_1.CheckCircle2, { size: 12 })),
        access.label));
}
function AdminRolesAccessPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [totalUsers, setTotalUsers] = (0, react_1.useState)(0);
    const [activeAccounts, setActiveAccounts] = (0, react_1.useState)(0);
    const [counts, setCounts] = (0, react_1.useState)({
        ADMIN: 0,
        PROJECT_MANAGER: 0,
        INTERIOR_DESIGNER: 0,
        CLIENT: 0
    });
    const [search, setSearch] = (0, react_1.useState)('');
    const email = (0, authService_1.getStoredEmail)() ||
        '';
    const adminName = (0, authService_1.getStoredDisplayName)('Admin');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        async function loadPage() {
            try {
                const data = await (0, adminRolesAccessService_1.loadAdminRolesAccess)();
                if (cancelled) {
                    return;
                }
                setTotalUsers(data.totalUsers);
                setActiveAccounts(data.activeAccounts);
                setCounts(data.counts);
                setError('');
            }
            catch (err) {
                if (cancelled) {
                    return;
                }
                setError(err.message ||
                    'Unable to load roles and access information.');
            }
            finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadPage();
        return () => {
            cancelled =
                true;
        };
    }, []);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const normalizedSearch = search
        .trim()
        .toLowerCase();
    const visibleRows = ACCESS_MATRIX.filter(row => {
        if (!normalizedSearch) {
            return true;
        }
        const text = [
            row.module,
            row.description,
            row.ADMIN.label,
            row.PROJECT_MANAGER.label,
            row.INTERIOR_DESIGNER.label,
            row.CLIENT.label
        ]
            .join(' ')
            .toLowerCase();
        return text.includes(normalizedSearch);
    });
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    return (h("div", { className: "dashboard-page" },
        h(AdminSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Open profile menu" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, adminName),
                                    h("span", null, email),
                                    h("small", null, "Administrator")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "admin-roles-main" },
                h("div", { className: "admin-roles-heading" },
                    h("div", null,
                        h("p", null, "User Management"),
                        h("h1", null, "Roles & Access"),
                        h("span", null, "Review InteriorSync system roles and the access available to each user type.")),
                    h("span", { className: "admin-roles-readonly" },
                        h(lucide_react_1.ShieldCheck, { size: 15 }),
                        "Backend Enforced")),
                error &&
                    (h("div", { className: "admin-roles-error" }, error)),
                h("div", { className: "admin-roles-notice" },
                    h(lucide_react_1.ShieldCheck, { size: 18 }),
                    h("div", null,
                        h("strong", null, "Role Based Access Control"),
                        h("span", null, "This page displays the current InteriorSync access policy. Role assignment is applied when an Administrator creates an account. Direct permission editing is not exposed by the current prototype backend."))),
                h("section", { className: "admin-roles-summary" },
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.KeyRound, { size: 20 })),
                        h("span", null, "System Roles"),
                        h("strong", null, "4")),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Users, { size: 20 })),
                        h("span", null, "Total Users"),
                        h("strong", null, loading
                            ? '—'
                            : totalUsers)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.CheckCircle2, { size: 20 })),
                        h("span", null, "Active Accounts"),
                        h("strong", null, loading
                            ? '—'
                            : activeAccounts)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.ShieldCheck, { size: 20 })),
                        h("span", null, "Access Model"),
                        h("strong", { className: "admin-roles-rbac-text" }, "RBAC"))),
                h("section", { className: "admin-role-cards" }, ROLE_DEFINITIONS.map(role => (h("article", { key: role.roleName, className: "admin-role-card" },
                    h("div", { className: "admin-role-card-top" },
                        h("div", { className: "admin-role-icon" },
                            h(lucide_react_1.UserCircle, { size: 25 })),
                        h("span", { className: "admin-role-scope" }, role.scope)),
                    h("h2", null, role.title),
                    h("p", null, role.description),
                    h("div", { className: "admin-role-member-count" },
                        h("span", null, "Assigned Accounts"),
                        h("strong", null, loading
                            ? '—'
                            : counts[role.roleName] ||
                                0)))))),
                h("section", { className: "admin-access-card" },
                    h("div", { className: "admin-access-card-heading" },
                        h("div", null,
                            h("h2", null, "Access Matrix"),
                            h("span", null, "Current prototype permissions by InteriorSync role.")),
                        h("div", { className: "admin-access-search" },
                            h(lucide_react_1.Search, { size: 17 }),
                            h("input", { type: "text", value: search, placeholder: "Search modules or access...", onChange: event => setSearch(event.target.value) }))),
                    h("div", { className: "admin-access-table-wrap" },
                        h("table", { className: "admin-access-table" },
                            h("thead", null,
                                h("tr", null,
                                    h("th", null, "Module"),
                                    h("th", null, "Administrator"),
                                    h("th", null, "Project Manager"),
                                    h("th", null, "Interior Designer"),
                                    h("th", null, "Client"))),
                            h("tbody", null, visibleRows.map(row => (h("tr", { key: row.module },
                                h("td", null,
                                    h("strong", null, row.module),
                                    h("span", null, row.description)),
                                h("td", null,
                                    h(AccessBadge, { access: row.ADMIN })),
                                h("td", null,
                                    h(AccessBadge, { access: row.PROJECT_MANAGER })),
                                h("td", null,
                                    h(AccessBadge, { access: row.INTERIOR_DESIGNER })),
                                h("td", null,
                                    h(AccessBadge, { access: row.CLIENT })))))))),
                    h("div", { className: "admin-access-footer" },
                        visibleRows.length,
                        " access rules shown"))))));
}
exports.default = AdminRolesAccessPage;

});
__register("src/pages/AdminSecurityPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lucide_react_1 = require("lucide-react");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const AdminSidebar_1 = __importDefault(require("../components/AdminSidebar"));
const authService_1 = require("../services/authService");
require("../styles/Dashboard.css");
require("../styles/AdminSecurity.css");
const SECURITY_CONTROLS = [
    {
        category: 'Authentication',
        icon: lucide_react_1.KeyRound,
        controls: [
            {
                name: 'JWT Authentication',
                implementation: 'Protected API requests require a valid JSON Web Token.',
                status: 'ENFORCED'
            },
            {
                name: 'Protected Frontend Routes',
                implementation: 'Role-specific frontend routes require an authenticated session.',
                status: 'ENFORCED'
            },
            {
                name: 'Password Authentication',
                implementation: 'Users authenticate using their registered email and password.',
                status: 'ENFORCED'
            }
        ]
    },
    {
        category: 'Access Control',
        icon: lucide_react_1.Users,
        controls: [
            {
                name: 'Role Based Access Control',
                implementation: 'System access is restricted according to Administrator, Project Manager, Interior Designer, and Client roles.',
                status: 'ENFORCED'
            },
            {
                name: 'Project Level Authorization',
                implementation: 'Clients and Interior Designers can access only projects assigned to them.',
                status: 'ENFORCED'
            },
            {
                name: 'Role Restricted Operations',
                implementation: 'Administrative, project management, design workflow, and client review actions are restricted by role.',
                status: 'ENFORCED'
            }
        ]
    },
    {
        category: 'File Security',
        icon: lucide_react_1.FileCheck2,
        controls: [
            {
                name: 'Asset File Allowlist',
                implementation: '3D asset uploads are restricted to supported design file extensions.',
                status: 'ENFORCED'
            },
            {
                name: 'Render Output Allowlist',
                implementation: 'Final render uploads accept supported image and PDF formats only.',
                status: 'ENFORCED'
            },
            {
                name: 'Maximum File Size',
                implementation: 'Uploaded asset and final output files are limited to 100 MB.',
                status: 'ENFORCED'
            },
            {
                name: 'Protected File Access',
                implementation: 'Asset downloads and render output access require authorization to the related project.',
                status: 'ENFORCED'
            }
        ]
    },
    {
        category: 'Workflow Protection',
        icon: lucide_react_1.LockKeyhole,
        controls: [
            {
                name: 'Delivered Project Lock',
                implementation: 'Delivered projects are locked from further design workflow modifications.',
                status: 'ENFORCED'
            },
            {
                name: 'Approval Controlled Rendering',
                implementation: 'Only approved or Render Ready design versions can proceed to render tracking.',
                status: 'ENFORCED'
            },
            {
                name: 'Client Approval Scope',
                implementation: 'Client approval and revision actions are restricted to assigned project versions.',
                status: 'ENFORCED'
            }
        ]
    },
    {
        category: 'Monitoring & Validation',
        icon: lucide_react_1.ScrollText,
        controls: [
            {
                name: 'Audit Logging',
                implementation: 'Important project, approval, version, render, and delivery actions are recorded for traceability.',
                status: 'ENFORCED'
            },
            {
                name: 'Request Validation',
                implementation: 'Backend validation checks required fields and rejects invalid request data.',
                status: 'ENFORCED'
            },
            {
                name: 'Centralized Error Handling',
                implementation: 'API errors return controlled error responses instead of exposing application failures directly.',
                status: 'ENFORCED'
            }
        ]
    }
];
function AdminSecurityPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const email = (0, authService_1.getStoredEmail)() ||
        '';
    const adminName = (0, authService_1.getStoredDisplayName)('Admin');
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    const totalControls = SECURITY_CONTROLS.reduce((total, section) => total +
        section.controls.length, 0);
    return (h("div", { className: "dashboard-page" },
        h(AdminSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Open profile menu" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, adminName),
                                    h("span", null, email),
                                    h("small", null, "Administrator")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "admin-security-main" },
                h("div", { className: "admin-security-heading" },
                    h("div", null,
                        h("p", null, "System"),
                        h("h1", null, "Security"),
                        h("span", null, "Review security controls currently enforced by the InteriorSync prototype.")),
                    h("span", { className: "admin-security-readonly" },
                        h(lucide_react_1.ShieldCheck, { size: 15 }),
                        "Security Enforced")),
                h("div", { className: "admin-security-notice" },
                    h(lucide_react_1.ShieldCheck, { size: 20 }),
                    h("div", null,
                        h("strong", null, "Security Posture"),
                        h("span", null, "This page is informational and read only. Security controls are implemented in the application and backend configuration and cannot be changed from this interface."))),
                h("section", { className: "admin-security-summary" },
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.ShieldCheck, { size: 21 })),
                        h("span", null, "Security Status"),
                        h("strong", { className: "admin-security-status-text" }, "Enforced")),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.KeyRound, { size: 21 })),
                        h("span", null, "Authentication"),
                        h("strong", null, "JWT")),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Users, { size: 21 })),
                        h("span", null, "Access Model"),
                        h("strong", null, "RBAC")),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.FileCheck2, { size: 21 })),
                        h("span", null, "Upload Limit"),
                        h("strong", null, "100 MB")),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.CheckCircle2, { size: 21 })),
                        h("span", null, "Security Controls"),
                        h("strong", null, totalControls))),
                h("section", { className: "admin-security-overview" },
                    h("div", { className: "admin-security-overview-icon" },
                        h(lucide_react_1.LockKeyhole, { size: 28 })),
                    h("div", null,
                        h("p", null, "CURRENT PROTECTION MODEL"),
                        h("h2", null, "Authentication, authorization, file protection, workflow locking, and audit monitoring"),
                        h("span", null, "InteriorSync applies multiple application-level controls to protect project data and restrict workflow actions to authorized users."))),
                h("section", { className: "admin-security-sections" }, SECURITY_CONTROLS.map(section => {
                    const SectionIcon = section.icon;
                    return (h("article", { className: "admin-security-card", key: section.category },
                        h("div", { className: "admin-security-card-heading" },
                            h("div", { className: "admin-security-card-icon" },
                                h(SectionIcon, { size: 20 })),
                            h("div", null,
                                h("h2", null, section.category),
                                h("span", null,
                                    section.controls.length,
                                    " controls"))),
                        h("div", { className: "admin-security-control-list" }, section.controls.map(control => (h("div", { className: "admin-security-control", key: control.name },
                            h("div", { className: "admin-security-control-main" },
                                h(lucide_react_1.CheckCircle2, { size: 16 }),
                                h("div", null,
                                    h("strong", null, control.name),
                                    h("p", null, control.implementation))),
                            h("span", { className: "admin-security-enforced-badge" }, control.status)))))));
                })),
                h("section", { className: "admin-security-important" },
                    h(lucide_react_1.AlertTriangle, { size: 20 }),
                    h("div", null,
                        h("strong", null, "Production Deployment Reminder"),
                        h("span", null, "Development credentials, database secrets, and JWT signing secrets should be supplied through secure environment configuration before a production deployment.")))))));
}
exports.default = AdminSecurityPage;

});
__register("src/pages/AdminSystemActivityPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const AdminSidebar_1 = __importDefault(require("../components/AdminSidebar"));
const authService_1 = require("../services/authService");
const adminSystemActivityService_1 = require("../services/adminSystemActivityService");
require("../styles/Dashboard.css");
require("../styles/AdminSystemActivity.css");
const CATEGORY_CONFIG = {
    USER: {
        label: 'User Management',
        className: 'admin-system-category-user'
    },
    PROJECT: {
        label: 'Project Activity',
        className: 'admin-system-category-project'
    },
    DESIGN: {
        label: 'Design & Version',
        className: 'admin-system-category-design'
    },
    RENDER: {
        label: 'Render Activity',
        className: 'admin-system-category-render'
    },
    SYSTEM: {
        label: 'System',
        className: 'admin-system-category-system'
    }
};
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function formatRole(role) {
    if (!role ||
        role ===
            'SYSTEM') {
        return 'System';
    }
    return role
        .toLowerCase()
        .split('_')
        .map(word => word.charAt(0)
        .toUpperCase() +
        word.slice(1))
        .join(' ');
}
function AdminSystemActivityPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [activities, setActivities] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [search, setSearch] = (0, react_1.useState)('');
    const [categoryFilter, setCategoryFilter] = (0, react_1.useState)('ALL');
    const [roleFilter, setRoleFilter] = (0, react_1.useState)('ALL');
    const [refreshKey, setRefreshKey] = (0, react_1.useState)(0);
    const email = (0, authService_1.getStoredEmail)() ||
        '';
    const adminName = (0, authService_1.getStoredDisplayName)('Admin');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        async function loadPage() {
            try {
                setLoading(true);
                const data = await (0, adminSystemActivityService_1.loadAdminSystemActivity)();
                if (cancelled) {
                    return;
                }
                setActivities(data);
                setError('');
            }
            catch (err) {
                if (cancelled) {
                    return;
                }
                setError(err.message ||
                    'Unable to load system activity.');
            }
            finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadPage();
        return () => {
            cancelled =
                true;
        };
    }, [
        refreshKey
    ]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const userActivityCount = activities.filter(activity => activity.category ===
        'USER').length;
    const projectActivityCount = activities.filter(activity => activity.category ===
        'PROJECT').length;
    const designActivityCount = activities.filter(activity => activity.category ===
        'DESIGN').length;
    const renderActivityCount = activities.filter(activity => activity.category ===
        'RENDER').length;
    const roleOptions = [
        ...new Set(activities
            .map(activity => activity.role)
            .filter(Boolean))
    ]
        .sort((a, b) => a.localeCompare(b));
    const normalizedSearch = search
        .trim()
        .toLowerCase();
    const visibleActivities = activities.filter(activity => {
        const matchesCategory = categoryFilter ===
            'ALL' ||
            activity.category ===
                categoryFilter;
        const matchesRole = roleFilter ===
            'ALL' ||
            activity.role ===
                roleFilter;
        const searchText = [
            activity.action,
            activity.userName,
            activity.role,
            activity.target,
            activity.details,
            CATEGORY_CONFIG[activity.category]?.label
        ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
        const matchesSearch = !normalizedSearch ||
            searchText.includes(normalizedSearch);
        return (matchesCategory &&
            matchesRole &&
            matchesSearch);
    });
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    return (h("div", { className: "dashboard-page" },
        h(AdminSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("button", { type: "button", className: "admin-system-refresh-button", onClick: () => setRefreshKey(previous => previous + 1), disabled: loading, "aria-label": "Refresh system activity" },
                        h(lucide_react_1.RefreshCw, { size: 17 })),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Open profile menu" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, adminName),
                                    h("span", null, email),
                                    h("small", null, "Administrator")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "admin-system-main" },
                h("div", { className: "admin-system-heading" },
                    h("div", null,
                        h("p", null, "Monitoring"),
                        h("h1", null, "System Activity"),
                        h("span", null, "Monitor recorded user, project, design, version, and render activity across InteriorSync.")),
                    h("span", { className: "admin-system-readonly" },
                        h(lucide_react_1.Activity, { size: 15 }),
                        "Read Only")),
                error &&
                    (h("div", { className: "admin-system-error" }, error)),
                h("section", { className: "admin-system-stats" },
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Activity, { size: 20 })),
                        h("span", null, "All Activity"),
                        h("strong", null, loading
                            ? '—'
                            : activities.length)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Users, { size: 20 })),
                        h("span", null, "User Management"),
                        h("strong", null, loading
                            ? '—'
                            : userActivityCount)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Folder, { size: 20 })),
                        h("span", null, "Project Activity"),
                        h("strong", null, loading
                            ? '—'
                            : projectActivityCount)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Layers3, { size: 20 })),
                        h("span", null, "Design & Version"),
                        h("strong", null, loading
                            ? '—'
                            : designActivityCount)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.ListChecks, { size: 20 })),
                        h("span", null, "Render Activity"),
                        h("strong", null, loading
                            ? '—'
                            : renderActivityCount))),
                h("section", { className: "admin-system-card" },
                    h("div", { className: "admin-system-toolbar" },
                        h("div", { className: "admin-system-search" },
                            h(lucide_react_1.Search, { size: 17 }),
                            h("input", { type: "text", value: search, placeholder: "Search activity, user, target, or details...", onChange: event => setSearch(event.target.value) })),
                        h("select", { value: categoryFilter, onChange: event => setCategoryFilter(event.target.value) },
                            h("option", { value: "ALL" }, "All Activity Types"),
                            h("option", { value: "USER" }, "User Management"),
                            h("option", { value: "PROJECT" }, "Project Activity"),
                            h("option", { value: "DESIGN" }, "Design & Version"),
                            h("option", { value: "RENDER" }, "Render Activity"),
                            h("option", { value: "SYSTEM" }, "System")),
                        h("select", { value: roleFilter, onChange: event => setRoleFilter(event.target.value) },
                            h("option", { value: "ALL" }, "All Roles"),
                            roleOptions.map(role => (h("option", { key: role, value: role }, formatRole(role)))))),
                    loading
                        ? (h("div", { className: "admin-system-empty" },
                            h(lucide_react_1.RefreshCw, { size: 29 }),
                            h("strong", null, "Loading system activity...")))
                        : visibleActivities.length ===
                            0
                            ? (h("div", { className: "admin-system-empty" },
                                h(lucide_react_1.Activity, { size: 31 }),
                                h("strong", null, "No activity found"),
                                h("span", null, "Try another search term or activity filter.")))
                            : (h("div", { className: "admin-system-table-wrap" },
                                h("table", { className: "admin-system-table" },
                                    h("thead", null,
                                        h("tr", null,
                                            h("th", null, "Date & Time"),
                                            h("th", null, "User"),
                                            h("th", null, "Role"),
                                            h("th", null, "Activity"),
                                            h("th", null, "Type"),
                                            h("th", null, "Target"),
                                            h("th", null, "Details"))),
                                    h("tbody", null, visibleActivities.map(activity => {
                                        const category = CATEGORY_CONFIG[activity.category] ||
                                            CATEGORY_CONFIG.SYSTEM;
                                        return (h("tr", { key: activity.activityId },
                                            h("td", null, formatDateTime(activity.timestamp)),
                                            h("td", null,
                                                h("div", { className: "admin-system-user-cell" },
                                                    h("div", { className: "admin-system-user-avatar" }, activity.userName
                                                        .charAt(0)
                                                        .toUpperCase()),
                                                    h("div", null,
                                                        h("strong", null, activity.userName),
                                                        activity.userId &&
                                                            (h("span", null,
                                                                "ID ",
                                                                activity.userId))))),
                                            h("td", null, formatRole(activity.role)),
                                            h("td", null,
                                                h("strong", { className: "admin-system-action-text" }, activity.action)),
                                            h("td", null,
                                                h("span", { className: `admin-system-category ${category.className}` }, category.label)),
                                            h("td", null, activity.target),
                                            h("td", null,
                                                h("span", { className: "admin-system-details" }, activity.details))));
                                    }))))),
                    h("div", { className: "admin-system-footer" },
                        "Showing ",
                        visibleActivities.length,
                        " of ",
                        activities.length,
                        " recorded activities"))))));
}
exports.default = AdminSystemActivityPage;

});
__register("src/pages/AdminSystemSettingsPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lucide_react_1 = require("lucide-react");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const AdminSidebar_1 = __importDefault(require("../components/AdminSidebar"));
const authService_1 = require("../services/authService");
require("../styles/Dashboard.css");
require("../styles/AdminSystemSettings.css");
const SYSTEM_CONFIGURATION = [
    {
        title: 'Application',
        icon: lucide_react_1.Globe2,
        description: 'Core InteriorSync application configuration.',
        items: [
            {
                label: 'Application Name',
                value: 'InteriorSync'
            },
            {
                label: 'Application Type',
                value: 'Web Based Application'
            },
            {
                label: 'Environment',
                value: 'Prototype / Development'
            },
            {
                label: 'Authentication',
                value: 'JWT Authentication'
            }
        ]
    },
    {
        title: 'Backend & Database',
        icon: lucide_react_1.Server,
        description: 'Current application services and data storage.',
        items: [
            {
                label: 'Backend Framework',
                value: 'Spring Boot 4.1.1'
            },
            {
                label: 'Database',
                value: 'MySQL'
            },
            {
                label: 'Backend API',
                value: 'Spring REST API'
            },
            {
                label: 'Persistence',
                value: 'JPA / Hibernate'
            }
        ]
    },
    {
        title: 'File Management',
        icon: lucide_react_1.HardDrive,
        description: 'File upload restrictions enforced by InteriorSync.',
        items: [
            {
                label: 'Maximum Upload Size',
                value: '100 MB'
            },
            {
                label: 'Asset File Types',
                value: 'BLEND, SKP, OBJ, FBX, GLB, GLTF'
            },
            {
                label: 'Final Output Types',
                value: 'PNG, JPG, JPEG, WEBP, PDF'
            },
            {
                label: 'File Access',
                value: 'Protected by Project Authorization'
            }
        ]
    },
    {
        title: 'Project Workflow',
        icon: lucide_react_1.Workflow,
        description: 'Configured project and design workflow stages.',
        items: [
            {
                label: 'Default Project Status',
                value: 'ACTIVE'
            },
            {
                label: 'Design Version Statuses',
                value: 'DRAFT, FOR_REVIEW, REVISION_REQUESTED, APPROVED, RENDER_READY'
            },
            {
                label: 'Render Job Statuses',
                value: 'QUEUED, RENDERING, COMPLETED, FAILED'
            },
            {
                label: 'Completed Project Status',
                value: 'DELIVERED'
            }
        ]
    },
    {
        title: 'Roles & Access',
        icon: lucide_react_1.Users,
        description: 'System roles recognized by the current RBAC model.',
        items: [
            {
                label: 'Administrator',
                value: 'System Administration'
            },
            {
                label: 'Project Manager',
                value: 'Project Management and Monitoring'
            },
            {
                label: 'Interior Designer',
                value: 'Assigned Design Workflow'
            },
            {
                label: 'Client',
                value: 'Assigned Project Review and Approval'
            }
        ]
    },
    {
        title: 'Security',
        icon: lucide_react_1.ShieldCheck,
        description: 'Security controls currently configured in the prototype.',
        items: [
            {
                label: 'Access Model',
                value: 'Role Based Access Control'
            },
            {
                label: 'Protected Routes',
                value: 'Enabled'
            },
            {
                label: 'Protected Downloads',
                value: 'Enabled'
            },
            {
                label: 'Audit Logging',
                value: 'Enabled'
            }
        ]
    }
];
function AdminSystemSettingsPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const email = (0, authService_1.getStoredEmail)() ||
        '';
    const adminName = (0, authService_1.getStoredDisplayName)('Admin');
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    return (h("div", { className: "dashboard-page" },
        h(AdminSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Open profile menu" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, adminName),
                                    h("span", null, email),
                                    h("small", null, "Administrator")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "admin-settings-main" },
                h("div", { className: "admin-settings-heading" },
                    h("div", null,
                        h("p", null, "System"),
                        h("h1", null, "System Settings"),
                        h("span", null, "Review the current application, workflow, file, and security configuration of InteriorSync.")),
                    h("span", { className: "admin-settings-status" },
                        h(lucide_react_1.CheckCircle2, { size: 15 }),
                        "Application Configured")),
                h("div", { className: "admin-settings-notice" },
                    h(lucide_react_1.Settings, { size: 20 }),
                    h("div", null,
                        h("strong", null, "Read Only Configuration"),
                        h("span", null, "These values describe the current InteriorSync prototype configuration. Direct system configuration changes are not exposed through the current application interface."))),
                h("section", { className: "admin-settings-summary" },
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Globe2, { size: 21 })),
                        h("span", null, "Application"),
                        h("strong", null, "Web")),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Database, { size: 21 })),
                        h("span", null, "Database"),
                        h("strong", null, "MySQL")),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.KeyRound, { size: 21 })),
                        h("span", null, "Authentication"),
                        h("strong", null, "JWT")),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Users, { size: 21 })),
                        h("span", null, "System Roles"),
                        h("strong", null, "4")),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.FileCheck2, { size: 21 })),
                        h("span", null, "Upload Limit"),
                        h("strong", null, "100 MB"))),
                h("section", { className: "admin-settings-architecture" },
                    h("div", { className: "admin-settings-architecture-icon" },
                        h(lucide_react_1.Boxes, { size: 27 })),
                    h("div", null,
                        h("p", null, "CURRENT SYSTEM CONFIGURATION"),
                        h("h2", null, "React Frontend, Spring Boot API, MySQL Database, and Protected File Storage"),
                        h("span", null, "InteriorSync integrates project management, version control, client review, render tracking, notifications, audit logging, and protected file handling in one web-based application."))),
                h("section", { className: "admin-settings-grid" }, SYSTEM_CONFIGURATION.map(section => {
                    const SectionIcon = section.icon;
                    return (h("article", { className: "admin-settings-card", key: section.title },
                        h("div", { className: "admin-settings-card-header" },
                            h("div", { className: "admin-settings-card-icon" },
                                h(SectionIcon, { size: 20 })),
                            h("div", null,
                                h("h2", null, section.title),
                                h("span", null, section.description))),
                        h("div", { className: "admin-settings-list" }, section.items.map(item => (h("div", { className: "admin-settings-row", key: item.label },
                            h("span", null, item.label),
                            h("strong", null, item.value)))))));
                })),
                h("section", { className: "admin-settings-protection" },
                    h(lucide_react_1.LockKeyhole, { size: 20 }),
                    h("div", null,
                        h("strong", null, "Configuration Protection"),
                        h("span", null, "Sensitive configuration such as database credentials and JWT signing secrets should remain outside the user interface and should be supplied through secure environment configuration during deployment.")))))));
}
exports.default = AdminSystemSettingsPage;

});
__register("src/pages/AdminUserManagementPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const AdminSidebar_1 = __importDefault(require("../components/AdminSidebar"));
const authService_1 = require("../services/authService");
const adminUserManagementService_1 = require("../services/adminUserManagementService");
require("../styles/Dashboard.css");
require("../styles/AdminUserManagement.css");
const ROLE_OPTIONS = [
    {
        value: 'ADMIN',
        label: 'Administrator'
    },
    {
        value: 'PROJECT_MANAGER',
        label: 'Project Manager'
    },
    {
        value: 'INTERIOR_DESIGNER',
        label: 'Interior Designer'
    },
    {
        value: 'CLIENT',
        label: 'Client'
    }
];
const EMPTY_FORM = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roleName: 'INTERIOR_DESIGNER',
    contactNumber: '',
    address: ''
};
const EMPTY_EDIT_FORM = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roleName: 'INTERIOR_DESIGNER'
};
function getRoleName(user) {
    if (typeof user?.role ===
        'string') {
        return user.role;
    }
    return (user
        ?.role
        ?.roleName ||
        'UNKNOWN');
}
function getUserName(user) {
    const fullName = `${user?.firstName || ''} ${user?.lastName || ''}`
        .trim();
    return (fullName ||
        user?.email ||
        'Unknown User');
}
function formatLabel(value) {
    if (!value) {
        return 'Unknown';
    }
    return String(value)
        .replaceAll('_', ' ')
        .toLowerCase()
        .replace(/\b\w/g, character => character.toUpperCase());
}
function formatDate(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
function AdminUserManagementPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [users, setUsers] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [success, setSuccess] = (0, react_1.useState)('');
    const [searchTerm, setSearchTerm] = (0, react_1.useState)('');
    const [roleFilter, setRoleFilter] = (0, react_1.useState)('ALL');
    const [statusFilter, setStatusFilter] = (0, react_1.useState)('ALL');
    const [addModalOpen, setAddModalOpen] = (0, react_1.useState)(false);
    const [form, setForm] = (0, react_1.useState)(EMPTY_FORM);
    const [submitting, setSubmitting] = (0, react_1.useState)(false);
    const [formError, setFormError] = (0, react_1.useState)('');
    const [editModalOpen, setEditModalOpen] = (0, react_1.useState)(false);
    const [editingUser, setEditingUser] = (0, react_1.useState)(null);
    const [editForm, setEditForm] = (0, react_1.useState)(EMPTY_EDIT_FORM);
    const [editSubmitting, setEditSubmitting] = (0, react_1.useState)(false);
    const [editError, setEditError] = (0, react_1.useState)('');
    const [statusUpdatingId, setStatusUpdatingId] = (0, react_1.useState)(null);
    const [deleteTarget, setDeleteTarget] = (0, react_1.useState)(null);
    const [deleting, setDeleting] = (0, react_1.useState)(false);
    const [deleteError, setDeleteError] = (0, react_1.useState)('');
    const email = (0, authService_1.getStoredEmail)() || '';
    const currentUserId = (0, authService_1.getStoredUserId)();
    const adminName = (0, authService_1.getStoredDisplayName)('Admin');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        (0, adminUserManagementService_1.loadUsers)()
            .then(data => {
            if (cancelled) {
                return;
            }
            setUsers(data);
            setError('');
        })
            .catch(err => {
            if (cancelled) {
                return;
            }
            if (err.message ===
                'Your session has expired. Please log in again.') {
                navigate('/login', {
                    replace: true
                });
                return;
            }
            setError(err.message ||
                'Unable to load users.');
        })
            .finally(() => {
            if (cancelled) {
                return;
            }
            setLoading(false);
        });
        return () => {
            cancelled = true;
        };
    }, [navigate]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const counts = (0, react_1.useMemo)(() => ({
        total: users.length,
        active: users.filter(user => user.status ===
            'ACTIVE').length,
        admins: users.filter(user => getRoleName(user) ===
            'ADMIN').length,
        managers: users.filter(user => getRoleName(user) ===
            'PROJECT_MANAGER').length,
        designers: users.filter(user => getRoleName(user) ===
            'INTERIOR_DESIGNER').length,
        clients: users.filter(user => getRoleName(user) ===
            'CLIENT').length
    }), [users]);
    const filteredUsers = (0, react_1.useMemo)(() => {
        const query = searchTerm
            .trim()
            .toLowerCase();
        return users
            .filter(user => {
            const role = getRoleName(user);
            if (roleFilter !==
                'ALL' &&
                role !==
                    roleFilter) {
                return false;
            }
            if (statusFilter !==
                'ALL' &&
                user.status !==
                    statusFilter) {
                return false;
            }
            if (!query) {
                return true;
            }
            return (getUserName(user)
                .toLowerCase()
                .includes(query) ||
                user.email
                    ?.toLowerCase()
                    .includes(query) ||
                role
                    .toLowerCase()
                    .includes(query));
        })
            .sort((a, b) => new Date(b.createdAt || 0) -
            new Date(a.createdAt || 0));
    }, [
        users,
        searchTerm,
        roleFilter,
        statusFilter
    ]);
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    function openAddModal() {
        setForm(EMPTY_FORM);
        setFormError('');
        setSuccess('');
        setAddModalOpen(true);
    }
    function closeAddModal() {
        if (submitting) {
            return;
        }
        setAddModalOpen(false);
        setFormError('');
    }
    function updateForm(field, value) {
        setForm(previous => ({
            ...previous,
            [field]: value
        }));
    }
    function validateForm() {
        if (!form.firstName.trim()) {
            return 'First Name is required.';
        }
        if (!form.lastName.trim()) {
            return 'Last Name is required.';
        }
        if (!form.email.trim()) {
            return 'Email is required.';
        }
        if (!form.password) {
            return 'Password is required.';
        }
        if (!form.roleName) {
            return 'Role is required.';
        }
        if (form.roleName ===
            'CLIENT' &&
            !form.contactNumber.trim()) {
            return 'Contact Number is required for Client accounts.';
        }
        if (form.roleName ===
            'CLIENT' &&
            !form.address.trim()) {
            return 'Address is required for Client accounts.';
        }
        return '';
    }
    async function handleCreateUser(event) {
        event.preventDefault();
        const validationMessage = validateForm();
        if (validationMessage) {
            setFormError(validationMessage);
            return;
        }
        try {
            setSubmitting(true);
            setFormError('');
            setError('');
            setSuccess('');
            await (0, adminUserManagementService_1.createManagedUser)(form);
            const refreshedUsers = await (0, adminUserManagementService_1.loadUsers)();
            setUsers(refreshedUsers);
            setAddModalOpen(false);
            setForm(EMPTY_FORM);
            setSuccess('User Created Successfully');
        }
        catch (err) {
            setFormError(err.message ||
                'Unable to create user.');
        }
        finally {
            setSubmitting(false);
        }
    }
    function openEditModal(user) {
        setEditingUser(user);
        setEditForm({
            firstName: user?.firstName || '',
            lastName: user?.lastName || '',
            email: user?.email || '',
            password: '',
            roleName: getRoleName(user)
        });
        setEditError('');
        setSuccess('');
        setEditModalOpen(true);
    }
    function closeEditModal() {
        if (editSubmitting) {
            return;
        }
        setEditModalOpen(false);
        setEditingUser(null);
        setEditForm(EMPTY_EDIT_FORM);
        setEditError('');
    }
    function updateEditForm(field, value) {
        setEditForm(previous => ({
            ...previous,
            [field]: value
        }));
    }
    function validateEditForm() {
        if (!editForm.firstName.trim()) {
            return 'First Name is required.';
        }
        if (!editForm.lastName.trim()) {
            return 'Last Name is required.';
        }
        if (!editForm.email.trim()) {
            return 'Email is required.';
        }
        if (!editForm.roleName) {
            return 'Role is required.';
        }
        return '';
    }
    async function handleUpdateUser(event) {
        event.preventDefault();
        if (!editingUser) {
            return;
        }
        const validationMessage = validateEditForm();
        if (validationMessage) {
            setEditError(validationMessage);
            return;
        }
        const editingCurrentUser = Number(editingUser.userId) ===
            Number(currentUserId);
        const emailChanged = editingCurrentUser &&
            editingUser.email
                ?.trim()
                .toLowerCase() !==
                editForm.email
                    .trim()
                    .toLowerCase();
        try {
            setEditSubmitting(true);
            setEditError('');
            setError('');
            setSuccess('');
            await (0, adminUserManagementService_1.updateManagedUser)(editingUser.userId, editForm);
            if (emailChanged) {
                (0, authService_1.logout)();
                navigate('/login', {
                    replace: true
                });
                return;
            }
            const refreshedUsers = await (0, adminUserManagementService_1.loadUsers)();
            setUsers(refreshedUsers);
            setEditModalOpen(false);
            setEditingUser(null);
            setEditForm(EMPTY_EDIT_FORM);
            setSuccess('User Updated Successfully');
        }
        catch (err) {
            setEditError(err.message ||
                'Unable to update user.');
        }
        finally {
            setEditSubmitting(false);
        }
    }
    async function handleToggleStatus(user) {
        const nextStatus = user.status === 'ACTIVE'
            ? 'INACTIVE'
            : 'ACTIVE';
        try {
            setStatusUpdatingId(user.userId);
            setError('');
            setSuccess('');
            await (0, adminUserManagementService_1.updateManagedUserStatus)(user.userId, nextStatus);
            const refreshedUsers = await (0, adminUserManagementService_1.loadUsers)();
            setUsers(refreshedUsers);
            setSuccess(nextStatus === 'ACTIVE'
                ? 'User Activated Successfully'
                : 'User Deactivated Successfully');
        }
        catch (err) {
            setError(err.message ||
                'Unable to update account status.');
        }
        finally {
            setStatusUpdatingId(null);
        }
    }
    function openDeleteModal(user) {
        setDeleteTarget(user);
        setDeleteError('');
        setSuccess('');
    }
    function closeDeleteModal() {
        if (deleting) {
            return;
        }
        setDeleteTarget(null);
        setDeleteError('');
    }
    async function handleDeleteUser() {
        if (!deleteTarget) {
            return;
        }
        try {
            setDeleting(true);
            setDeleteError('');
            setError('');
            setSuccess('');
            await (0, adminUserManagementService_1.deleteManagedUser)(deleteTarget.userId);
            const refreshedUsers = await (0, adminUserManagementService_1.loadUsers)();
            setUsers(refreshedUsers);
            setDeleteTarget(null);
            setSuccess('User Deleted Successfully');
        }
        catch (err) {
            setDeleteError(err.message ||
                'Unable to delete user.');
        }
        finally {
            setDeleting(false);
        }
    }
    const summaryCards = [
        {
            label: 'Total Users',
            value: counts.total,
            icon: lucide_react_1.Users
        },
        {
            label: 'Active Accounts',
            value: counts.active,
            icon: lucide_react_1.UserCheck
        },
        {
            label: 'Administrators',
            value: counts.admins,
            icon: lucide_react_1.ShieldCheck
        },
        {
            label: 'Project Managers',
            value: counts.managers,
            icon: lucide_react_1.UserCog
        },
        {
            label: 'Interior Designers',
            value: counts.designers,
            icon: lucide_react_1.UsersRound
        },
        {
            label: 'Clients',
            value: counts.clients,
            icon: lucide_react_1.UserRound
        }
    ];
    return (h("div", { className: "dashboard-page" },
        h(AdminSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, adminName),
                                    h("span", null, email),
                                    h("small", null, "Administrator")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "admin-users-main" },
                h("div", { className: "admin-users-heading" },
                    h("div", null,
                        h("p", { className: "admin-users-eyebrow" }, "User Management"),
                        h("h1", null, "Users"),
                        h("span", null, "Manage InteriorSync user accounts and system roles.")),
                    h("button", { type: "button", className: "admin-add-user-button", onClick: openAddModal },
                        h(lucide_react_1.CirclePlus, { size: 18 }),
                        "Add User")),
                error &&
                    (h("div", { className: "dashboard-error" }, error)),
                success &&
                    (h("div", { className: "admin-user-success" }, success)),
                h("section", { className: "admin-users-summary" }, summaryCards.map(card => {
                    const Icon = card.icon;
                    return (h("article", { className: "admin-users-summary-card", key: card.label },
                        h("div", { className: "admin-users-summary-icon" },
                            h(Icon, { size: 20 })),
                        h("div", null,
                            h("span", null, card.label),
                            h("strong", null, loading
                                ? '—'
                                : card.value))));
                })),
                h("section", { className: "admin-users-panel" },
                    h("div", { className: "admin-users-toolbar" },
                        h("div", { className: "admin-users-search" },
                            h(lucide_react_1.Search, { size: 18 }),
                            h("input", { type: "text", value: searchTerm, onChange: event => setSearchTerm(event.target.value), placeholder: "Search users..." })),
                        h("div", { className: "admin-users-filters" },
                            h("select", { value: roleFilter, onChange: event => setRoleFilter(event.target.value) },
                                h("option", { value: "ALL" }, "All Roles"),
                                ROLE_OPTIONS.map(role => (h("option", { key: role.value, value: role.value }, role.label)))),
                            h("select", { value: statusFilter, onChange: event => setStatusFilter(event.target.value) },
                                h("option", { value: "ALL" }, "All Statuses"),
                                h("option", { value: "ACTIVE" }, "Active"),
                                h("option", { value: "INACTIVE" }, "Inactive")))),
                    loading
                        ? (h("div", { className: "admin-users-empty" }, "Loading users..."))
                        : filteredUsers.length
                            ? (h("div", { className: "admin-users-table-wrapper" },
                                h("table", { className: "admin-users-table" },
                                    h("thead", null,
                                        h("tr", null,
                                            h("th", null, "User"),
                                            h("th", null, "Email"),
                                            h("th", null, "Role"),
                                            h("th", null, "Account Status"),
                                            h("th", null, "Created"),
                                            h("th", null, "Action"))),
                                    h("tbody", null, filteredUsers.map(user => (h("tr", { key: user.userId },
                                        h("td", null,
                                            h("div", { className: "admin-users-name-cell" },
                                                h("div", { className: "admin-users-avatar" },
                                                    h(lucide_react_1.UserCircle, { size: 21 })),
                                                h("div", null,
                                                    h("strong", null, getUserName(user)),
                                                    h("span", null,
                                                        "ID ",
                                                        user.userId)))),
                                        h("td", null, user.email),
                                        h("td", null,
                                            h("span", { className: "admin-users-role" }, formatLabel(getRoleName(user)))),
                                        h("td", null,
                                            h("span", { className: user.status ===
                                                    'ACTIVE'
                                                    ? 'admin-users-status admin-users-status-active'
                                                    : 'admin-users-status admin-users-status-inactive' }, formatLabel(user.status))),
                                        h("td", null, formatDate(user.createdAt)),
                                        h("td", null,
                                            h("div", { className: "admin-users-actions" },
                                                h("button", { type: "button", onClick: () => openEditModal(user) },
                                                    h(lucide_react_1.Pencil, { size: 13 }),
                                                    "Edit"),
                                                h("button", { type: "button", onClick: () => handleToggleStatus(user), disabled: statusUpdatingId ===
                                                        user.userId ||
                                                        Number(user.userId) ===
                                                            Number(currentUserId), title: Number(user.userId) ===
                                                        Number(currentUserId)
                                                        ? 'You cannot deactivate your own account.'
                                                        : '' }, statusUpdatingId ===
                                                    user.userId
                                                    ? 'Updating...'
                                                    : user.status ===
                                                        'ACTIVE'
                                                        ? 'Deactivate'
                                                        : 'Activate'),
                                                h("button", { type: "button", className: "admin-users-delete", onClick: () => openDeleteModal(user), disabled: Number(user.userId) ===
                                                        Number(currentUserId), title: Number(user.userId) ===
                                                        Number(currentUserId)
                                                        ? 'You cannot delete your own account.'
                                                        : 'Delete user' },
                                                    h(lucide_react_1.Trash2, { size: 13 }),
                                                    "Delete"))))))))))
                            : (h("div", { className: "admin-users-empty" },
                                h(lucide_react_1.Users, { size: 30 }),
                                h("strong", null, "No users found"),
                                h("span", null, "Try changing your search or filters."))),
                    !loading &&
                        (h("div", { className: "admin-users-footer" },
                            "Showing ",
                            filteredUsers.length,
                            " of ",
                            users.length,
                            " users"))))),
        addModalOpen &&
            (h("div", { className: "admin-user-modal-backdrop" },
                h("div", { className: "admin-user-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "add-user-title" },
                    h("div", { className: "admin-user-modal-header" },
                        h("div", null,
                            h("p", null, "User Management"),
                            h("h2", { id: "add-user-title" }, "Add User"),
                            h("span", null, "Create a new InteriorSync account.")),
                        h("button", { type: "button", className: "admin-user-modal-close", onClick: closeAddModal, disabled: submitting, "aria-label": "Close modal" },
                            h(lucide_react_1.X, { size: 20 }))),
                    h("form", { className: "admin-user-form", onSubmit: handleCreateUser },
                        formError &&
                            (h("div", { className: "admin-user-form-error" }, formError)),
                        h("div", { className: "admin-user-form-grid" },
                            h("div", { className: "admin-user-field" },
                                h("label", { htmlFor: "firstName" }, "First Name"),
                                h("input", { id: "firstName", type: "text", value: form.firstName, onChange: event => updateForm('firstName', event.target.value), placeholder: "Enter first name", disabled: submitting })),
                            h("div", { className: "admin-user-field" },
                                h("label", { htmlFor: "lastName" }, "Last Name"),
                                h("input", { id: "lastName", type: "text", value: form.lastName, onChange: event => updateForm('lastName', event.target.value), placeholder: "Enter last name", disabled: submitting })),
                            h("div", { className: "admin-user-field admin-user-field-wide" },
                                h("label", { htmlFor: "userEmail" }, "Email"),
                                h("input", { id: "userEmail", type: "email", value: form.email, onChange: event => updateForm('email', event.target.value), placeholder: "user@interiorsync.test", disabled: submitting })),
                            h("div", { className: "admin-user-field" },
                                h("label", { htmlFor: "roleName" }, "Role"),
                                h("select", { id: "roleName", value: form.roleName, onChange: event => updateForm('roleName', event.target.value), disabled: submitting }, ROLE_OPTIONS.map(role => (h("option", { key: role.value, value: role.value }, role.label))))),
                            h("div", { className: "admin-user-field" },
                                h("label", { htmlFor: "password" }, "Temporary Password"),
                                h("input", { id: "password", type: "password", value: form.password, onChange: event => updateForm('password', event.target.value), placeholder: "Enter password", autoComplete: "new-password", disabled: submitting })),
                            form.roleName ===
                                'CLIENT' &&
                                (h(Fragment, null,
                                    h("div", { className: "admin-user-field" },
                                        h("label", { htmlFor: "contactNumber" }, "Contact Number"),
                                        h("input", { id: "contactNumber", type: "text", value: form.contactNumber, onChange: event => updateForm('contactNumber', event.target.value), placeholder: "Enter contact number", disabled: submitting })),
                                    h("div", { className: "admin-user-field" },
                                        h("label", { htmlFor: "address" }, "Address"),
                                        h("input", { id: "address", type: "text", value: form.address, onChange: event => updateForm('address', event.target.value), placeholder: "Enter address", disabled: submitting }))))),
                        h("div", { className: "admin-user-form-note" },
                            h(lucide_react_1.ShieldCheck, { size: 17 }),
                            h("span", null, "The account will be created using the selected InteriorSync system role.")),
                        h("div", { className: "admin-user-modal-actions" },
                            h("button", { type: "button", className: "admin-user-cancel", onClick: closeAddModal, disabled: submitting }, "Cancel"),
                            h("button", { type: "submit", className: "admin-user-create", disabled: submitting },
                                h(lucide_react_1.CirclePlus, { size: 17 }),
                                submitting
                                    ? 'Creating...'
                                    : 'Add User')))))),
        editModalOpen &&
            editingUser &&
            (h("div", { className: "admin-user-modal-backdrop" },
                h("div", { className: "admin-user-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "edit-user-title" },
                    h("div", { className: "admin-user-modal-header" },
                        h("div", null,
                            h("p", null, "User Management"),
                            h("h2", { id: "edit-user-title" }, "Edit User"),
                            h("span", null, "Update account details and system role.")),
                        h("button", { type: "button", className: "admin-user-modal-close", onClick: closeEditModal, disabled: editSubmitting, "aria-label": "Close modal" },
                            h(lucide_react_1.X, { size: 20 }))),
                    h("form", { className: "admin-user-form", onSubmit: handleUpdateUser },
                        editError &&
                            (h("div", { className: "admin-user-form-error" }, editError)),
                        h("div", { className: "admin-user-form-grid" },
                            h("div", { className: "admin-user-field" },
                                h("label", { htmlFor: "editFirstName" }, "First Name"),
                                h("input", { id: "editFirstName", type: "text", value: editForm.firstName, onChange: event => updateEditForm('firstName', event.target.value), disabled: editSubmitting })),
                            h("div", { className: "admin-user-field" },
                                h("label", { htmlFor: "editLastName" }, "Last Name"),
                                h("input", { id: "editLastName", type: "text", value: editForm.lastName, onChange: event => updateEditForm('lastName', event.target.value), disabled: editSubmitting })),
                            h("div", { className: "admin-user-field admin-user-field-wide" },
                                h("label", { htmlFor: "editEmail" }, "Email"),
                                h("input", { id: "editEmail", type: "email", value: editForm.email, onChange: event => updateEditForm('email', event.target.value), disabled: editSubmitting })),
                            h("div", { className: "admin-user-field" },
                                h("label", { htmlFor: "editRoleName" }, "Role"),
                                h("select", { id: "editRoleName", value: editForm.roleName, onChange: event => updateEditForm('roleName', event.target.value), disabled: editSubmitting ||
                                        getRoleName(editingUser) === 'CLIENT' ||
                                        Number(editingUser.userId) ===
                                            Number(currentUserId) }, ROLE_OPTIONS
                                    .filter(role => getRoleName(editingUser) === 'CLIENT'
                                    ? role.value === 'CLIENT'
                                    : role.value !== 'CLIENT')
                                    .map(role => (h("option", { key: role.value, value: role.value }, role.label))))),
                            h("div", { className: "admin-user-field" },
                                h("label", { htmlFor: "editPassword" }, "New Password"),
                                h("input", { id: "editPassword", type: "password", value: editForm.password, onChange: event => updateEditForm('password', event.target.value), placeholder: "Leave blank to keep current password", autoComplete: "new-password", disabled: editSubmitting }))),
                        getRoleName(editingUser) === 'CLIENT' &&
                            (h("div", { className: "admin-user-form-note" },
                                h(lucide_react_1.ShieldCheck, { size: 17 }),
                                h("span", null, "Client role changes are locked because Client accounts have a separate client profile and project history."))),
                        h("div", { className: "admin-user-modal-actions" },
                            h("button", { type: "button", className: "admin-user-cancel", onClick: closeEditModal, disabled: editSubmitting }, "Cancel"),
                            h("button", { type: "submit", className: "admin-user-create", disabled: editSubmitting },
                                h(lucide_react_1.Pencil, { size: 17 }),
                                editSubmitting
                                    ? 'Saving...'
                                    : 'Save Changes')))))),
        deleteTarget &&
            (h("div", { className: "admin-user-modal-backdrop" },
                h("div", { className: "admin-user-modal admin-user-delete-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "delete-user-title" },
                    h("div", { className: "admin-user-modal-header" },
                        h("div", null,
                            h("p", null, "User Management"),
                            h("h2", { id: "delete-user-title" }, "Delete User"),
                            h("span", null, "Remove this account from active user management.")),
                        h("button", { type: "button", className: "admin-user-modal-close", onClick: closeDeleteModal, disabled: deleting, "aria-label": "Close modal" },
                            h(lucide_react_1.X, { size: 20 }))),
                    h("div", { className: "admin-user-delete-body" },
                        deleteError &&
                            (h("div", { className: "admin-user-form-error" }, deleteError)),
                        h("div", { className: "admin-user-delete-warning" },
                            h(lucide_react_1.Trash2, { size: 22 }),
                            h("div", null,
                                h("strong", null,
                                    "Delete ",
                                    getUserName(deleteTarget),
                                    "?"),
                                h("span", null, "The account will no longer be able to sign in and will be removed from this user list. Existing project, approval, comment, render, and audit history will be preserved."))),
                        h("div", { className: "admin-user-modal-actions" },
                            h("button", { type: "button", className: "admin-user-cancel", onClick: closeDeleteModal, disabled: deleting }, "Cancel"),
                            h("button", { type: "button", className: "admin-user-danger", onClick: handleDeleteUser, disabled: deleting },
                                h(lucide_react_1.Trash2, { size: 17 }),
                                deleting
                                    ? 'Deleting...'
                                    : 'Delete User'))))))));
}
exports.default = AdminUserManagementPage;

});
__register("src/pages/AuditLogPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const AdminSidebar_1 = __importDefault(require("../components/AdminSidebar"));
const ProjectManagerSidebar_1 = __importDefault(require("../components/ProjectManagerSidebar"));
const authService_1 = require("../services/authService");
const auditLogService_1 = require("../services/auditLogService");
require("../styles/Dashboard.css");
require("../styles/AuditLogPage.css");
const ROLE_CONFIG = {
    ADMIN: {
        label: 'Administrator',
        Sidebar: AdminSidebar_1.default
    },
    PROJECT_MANAGER: {
        label: 'Project Manager',
        Sidebar: ProjectManagerSidebar_1.default
    }
};
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function formatLabel(value) {
    if (!value) {
        return 'Unknown';
    }
    return String(value)
        .replaceAll('_', ' ')
        .toLowerCase()
        .replace(/\b\w/g, character => character.toUpperCase());
}
function formatEntity(entityType, entityId) {
    const entity = formatLabel(entityType);
    if (entityId === null ||
        entityId === undefined ||
        entityId === '') {
        return entity;
    }
    return (`${entity} #${entityId}`);
}
function isToday(value) {
    if (!value) {
        return false;
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return false;
    }
    const today = new Date();
    return (date.getFullYear() ===
        today.getFullYear() &&
        date.getMonth() ===
            today.getMonth() &&
        date.getDate() ===
            today.getDate());
}
function AuditLogPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const role = (0, authService_1.getStoredRole)();
    const roleConfig = ROLE_CONFIG[role] ||
        ROLE_CONFIG.ADMIN;
    const Sidebar = roleConfig.Sidebar;
    const email = (0, authService_1.getStoredEmail)() || '';
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [logs, setLogs] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [searchTerm, setSearchTerm] = (0, react_1.useState)('');
    const [actionFilter, setActionFilter] = (0, react_1.useState)('ALL');
    const [userFilter, setUserFilter] = (0, react_1.useState)('ALL');
    const displayName = (0, authService_1.getStoredDisplayName)(roleConfig.label);
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        (0, auditLogService_1.loadAuditLogs)()
            .then(data => {
            if (cancelled) {
                return;
            }
            setLogs(data);
            setError('');
        })
            .catch(err => {
            if (cancelled) {
                return;
            }
            if (err.message ===
                'Your session has expired. Please log in again.') {
                navigate('/login', {
                    replace: true
                });
                return;
            }
            setError(err.message ||
                'Unable to load audit logs.');
        })
            .finally(() => {
            if (cancelled) {
                return;
            }
            setLoading(false);
        });
        return () => {
            cancelled = true;
        };
    }, [navigate]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const uniqueActions = (0, react_1.useMemo)(() => [
        ...new Set(logs.map(log => log.action))
    ].sort(), [logs]);
    const uniqueUsers = (0, react_1.useMemo)(() => [
        ...new Set(logs.map(log => log.userName))
    ].sort(), [logs]);
    const uniqueActorCount = uniqueUsers.length;
    const todayCount = logs.filter(log => isToday(log.createdAt)).length;
    const filteredLogs = (0, react_1.useMemo)(() => {
        const query = searchTerm
            .trim()
            .toLowerCase();
        return logs.filter(log => {
            if (actionFilter !==
                'ALL' &&
                log.action !==
                    actionFilter) {
                return false;
            }
            if (userFilter !==
                'ALL' &&
                log.userName !==
                    userFilter) {
                return false;
            }
            if (!query) {
                return true;
            }
            const target = formatEntity(log.entityType, log.entityId);
            return (log.userName
                .toLowerCase()
                .includes(query) ||
                log.role
                    .toLowerCase()
                    .includes(query) ||
                log.action
                    .toLowerCase()
                    .includes(query) ||
                target
                    .toLowerCase()
                    .includes(query) ||
                String(log.details ||
                    '')
                    .toLowerCase()
                    .includes(query));
        });
    }, [
        logs,
        searchTerm,
        actionFilter,
        userFilter
    ]);
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    return (h("div", { className: "dashboard-page" },
        h(Sidebar, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    role ===
                        'PROJECT_MANAGER' &&
                        (h("button", { type: "button", className: "topbar-icon-button", onClick: () => navigate('/manager/notifications'), "aria-label": "Notifications" },
                            h(lucide_react_1.Activity, { size: 25 }))),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, displayName),
                                    h("span", null, email),
                                    h("small", null, roleConfig.label)),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "audit-log-main" },
                h("div", { className: "audit-log-heading" },
                    h("div", null,
                        h("p", { className: "audit-log-eyebrow" }, "Monitoring"),
                        h("h1", null, "Audit Log"),
                        h("span", null, "Review recorded system actions, affected records, users, and timestamps."))),
                error &&
                    (h("div", { className: "dashboard-error" }, error)),
                h("section", { className: "audit-summary-grid" },
                    h("article", { className: "audit-summary-card" },
                        h("div", { className: "audit-summary-icon" },
                            h(lucide_react_1.ClipboardList, { size: 21 })),
                        h("div", null,
                            h("span", null, "Total Events"),
                            h("strong", null, loading
                                ? '—'
                                : logs.length))),
                    h("article", { className: "audit-summary-card" },
                        h("div", { className: "audit-summary-icon" },
                            h(lucide_react_1.Activity, { size: 21 })),
                        h("div", null,
                            h("span", null, "Events Today"),
                            h("strong", null, loading
                                ? '—'
                                : todayCount))),
                    h("article", { className: "audit-summary-card" },
                        h("div", { className: "audit-summary-icon" },
                            h(lucide_react_1.Users, { size: 21 })),
                        h("div", null,
                            h("span", null, "Recorded Users"),
                            h("strong", null, loading
                                ? '—'
                                : uniqueActorCount))),
                    h("article", { className: "audit-summary-card" },
                        h("div", { className: "audit-summary-icon" },
                            h(lucide_react_1.ShieldCheck, { size: 21 })),
                        h("div", null,
                            h("span", null, "Action Types"),
                            h("strong", null, loading
                                ? '—'
                                : uniqueActions.length)))),
                h("section", { className: "audit-log-panel" },
                    h("div", { className: "audit-log-toolbar" },
                        h("div", { className: "audit-log-search" },
                            h(lucide_react_1.Search, { size: 18 }),
                            h("input", { type: "text", value: searchTerm, onChange: event => setSearchTerm(event.target.value), placeholder: "Search audit logs..." })),
                        h("div", { className: "audit-log-filter-group" },
                            h("div", { className: "audit-select-wrapper" },
                                h(lucide_react_1.Filter, { size: 15 }),
                                h("select", { value: actionFilter, onChange: event => setActionFilter(event.target.value) },
                                    h("option", { value: "ALL" }, "All Actions"),
                                    uniqueActions.map(action => (h("option", { key: action, value: action }, formatLabel(action)))))),
                            h("div", { className: "audit-select-wrapper" },
                                h(lucide_react_1.Users, { size: 15 }),
                                h("select", { value: userFilter, onChange: event => setUserFilter(event.target.value) },
                                    h("option", { value: "ALL" }, "All Users"),
                                    uniqueUsers.map(user => (h("option", { key: user, value: user }, user))))))),
                    loading
                        ? (h("div", { className: "audit-empty-state" },
                            h(lucide_react_1.ClipboardList, { size: 31 }),
                            h("strong", null, "Loading audit logs...")))
                        : filteredLogs.length > 0
                            ? (h("div", { className: "audit-table-wrapper" },
                                h("table", { className: "audit-log-table" },
                                    h("thead", null,
                                        h("tr", null,
                                            h("th", null, "Timestamp"),
                                            h("th", null, "User"),
                                            h("th", null, "Role"),
                                            h("th", null, "Action"),
                                            h("th", null, "Target Record"),
                                            h("th", null, "Result / Details"))),
                                    h("tbody", null, filteredLogs.map(log => (h("tr", { key: log.id },
                                        h("td", { className: "audit-time-cell" }, formatDateTime(log.createdAt)),
                                        h("td", null,
                                            h("div", { className: "audit-user-cell" },
                                                h("div", { className: "audit-user-icon" },
                                                    h(lucide_react_1.UserCircle, { size: 20 })),
                                                h("div", null,
                                                    h("strong", null, log.userName),
                                                    log.user?.email &&
                                                        (h("span", null, log.user.email))))),
                                        h("td", null,
                                            h("span", { className: "audit-role-badge" }, formatLabel(log.role))),
                                        h("td", null,
                                            h("span", { className: "audit-action-text" }, formatLabel(log.action))),
                                        h("td", null,
                                            h("span", { className: "audit-target-text" }, formatEntity(log.entityType, log.entityId))),
                                        h("td", null,
                                            h("span", { className: "audit-details-text" }, log.details)))))))))
                            : (h("div", { className: "audit-empty-state" },
                                h(lucide_react_1.ClipboardList, { size: 31 }),
                                h("strong", null, "No audit logs found"),
                                h("span", null, "Try adjusting the search or filter options."))),
                    !loading &&
                        (h("div", { className: "audit-log-footer" },
                            "Showing ",
                            filteredLogs.length,
                            " of ",
                            logs.length,
                            " recorded events")))))));
}
exports.default = AuditLogPage;

});
__register("src/pages/ClientActivityPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ClientSidebar_1 = __importDefault(require("../components/ClientSidebar"));
const authService_1 = require("../services/authService");
const clientDashboardService_1 = require("../services/clientDashboardService");
require("../styles/Dashboard.css");
require("../styles/DashboardActions.css");
function formatDateTime(value) {
    if (!value) {
        return '';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function ActivityIcon({ activity }) {
    if (activity.type ===
        'PROJECT') {
        return (h(lucide_react_1.FolderPlus, { size: 19 }));
    }
    if (activity.type ===
        'VERSION') {
        return (h(lucide_react_1.Upload, { size: 19 }));
    }
    if (activity.status ===
        'COMPLETED') {
        return (h(lucide_react_1.CheckCircle2, { size: 19 }));
    }
    if (activity.status ===
        'FAILED') {
        return (h(lucide_react_1.CircleX, { size: 19 }));
    }
    return (h(lucide_react_1.RefreshCw, { size: 19 }));
}
function ClientActivityPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [activities, setActivities] = (0, react_1.useState)([]);
    const [clientName, setClientName] = (0, react_1.useState)(null);
    const [unreadCount, setUnreadCount] = (0, react_1.useState)(0);
    const email = (0, authService_1.getStoredEmail)() || '';
    const fallbackName = (0, authService_1.getStoredDisplayName)('Client');
    const displayName = clientName ||
        fallbackName ||
        'Client';
    (0, react_1.useEffect)(() => {
        async function loadActivity() {
            try {
                setLoading(true);
                setError('');
                const data = await (0, clientDashboardService_1.loadClientDashboard)();
                setActivities(data.recentActivity || []);
                setClientName(data.clientName || null);
                setUnreadCount(data.unreadCount || 0);
            }
            catch (err) {
                setError(err.message ||
                    'Unable to load activity.');
                if (err.message ===
                    'Your session has expired. Please log in again.') {
                    navigate('/login', {
                        replace: true
                    });
                }
            }
            finally {
                setLoading(false);
            }
        }
        loadActivity();
    }, [navigate]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    function handleNotifications() {
        navigate('/client/dashboard', {
            replace: false
        });
    }
    return (h("div", { className: "dashboard-page" },
        h(ClientSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "dashboard-search" },
                        h(lucide_react_1.Search, { size: 20, className: "dashboard-search-icon" }),
                        h("input", { type: "text", placeholder: "Search", "aria-label": "Search" })),
                    h("button", { type: "button", className: "topbar-icon-button notification-button", "aria-label": "Notifications", onClick: handleNotifications },
                        h(lucide_react_1.Bell, { size: 27 }),
                        unreadCount > 0 &&
                            (h("span", { className: "notification-dot" }, unreadCount > 9
                                ? '9+'
                                : unreadCount))),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", "aria-label": "Profile", onClick: () => setProfileOpen(previous => !previous) },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, displayName),
                                    h("span", null, email)),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "activity-page-main" },
                h("div", { className: "activity-page-heading" },
                    h("button", { type: "button", className: "activity-back-button", onClick: () => navigate('/client/dashboard') },
                        h(lucide_react_1.ArrowLeft, { size: 18 }),
                        "Back to Dashboard"),
                    h("div", { className: "activity-heading-content" },
                        h("p", { className: "activity-page-eyebrow" }, "Workspace"),
                        h("h1", null, "Recent Activity"),
                        h("span", null, "View project, version, and render activity associated with your projects."))),
                error &&
                    (h("div", { className: "dashboard-error" }, error)),
                h("section", { className: "activity-page-card" }, loading
                    ? (h("div", { className: "dashboard-empty-state" },
                        h(lucide_react_1.RefreshCw, { size: 30, className: "dashboard-loading-icon" }),
                        h("p", null, "Loading activity...")))
                    : activities.length > 0
                        ? (h("div", { className: "activity-full-list" }, activities.map(activity => (h("article", { className: "activity-full-item", key: activity.id },
                            h("div", { className: "activity-full-icon" },
                                h(ActivityIcon, { activity: activity })),
                            h("div", { className: "activity-full-content" },
                                h("div", { className: "activity-full-title" },
                                    h("strong", null, activity.title),
                                    h("time", null, formatDateTime(activity.timestamp))),
                                h("p", null, activity.message)))))))
                        : (h("div", { className: "dashboard-empty-state" },
                            h(lucide_react_1.RefreshCw, { size: 30 }),
                            h("p", null, "No activity available."),
                            h("span", null, "Project activity will appear here."))))))));
}
exports.default = ClientActivityPage;

});
__register("src/pages/ClientAssetLibraryPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ClientSidebar_1 = __importDefault(require("../components/ClientSidebar"));
const authService_1 = require("../services/authService");
const clientDashboardService_1 = require("../services/clientDashboardService");
const clientAssetLibraryService_1 = require("../services/clientAssetLibraryService");
require("../styles/Dashboard.css");
require("../styles/ClientAssetLibrary.css");
function formatDate(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
function formatLabel(value) {
    if (!value) {
        return 'Unknown';
    }
    return value
        .toString()
        .replaceAll('_', ' ')
        .toLowerCase()
        .replace(/\b\w/g, character => character.toUpperCase());
}
function ClientAssetLibraryPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [assets, setAssets] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [searchTerm, setSearchTerm] = (0, react_1.useState)('');
    const [selectedCategory, setSelectedCategory] = (0, react_1.useState)('ALL');
    const [unreadCount, setUnreadCount] = (0, react_1.useState)(0);
    const email = (0, authService_1.getStoredEmail)() || '';
    const fallbackName = (0, authService_1.getStoredDisplayName)('Client');
    (0, react_1.useEffect)(() => {
        async function loadPage() {
            try {
                setLoading(true);
                setError('');
                const [assetRows, unread] = await Promise.all([
                    (0, clientAssetLibraryService_1.loadClientAssetLibrary)(),
                    (0, clientDashboardService_1.getUnreadNotificationCount)()
                ]);
                setAssets(assetRows);
                setUnreadCount(unread);
            }
            catch (err) {
                setError(err.message ||
                    'Unable to load asset library.');
                if (err.message ===
                    'Your session has expired. Please log in again.') {
                    navigate('/login', {
                        replace: true
                    });
                }
            }
            finally {
                setLoading(false);
            }
        }
        loadPage();
    }, [navigate]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const categoryFilters = (0, react_1.useMemo)(() => {
        const counts = new Map();
        for (const asset of assets) {
            const key = asset.category ||
                'Uncategorized';
            counts.set(key, (counts.get(key) || 0) + 1);
        }
        return [
            {
                key: 'ALL',
                label: 'All',
                count: assets.length
            },
            ...Array.from(counts.entries())
                .sort((a, b) => a[0].localeCompare(b[0]))
                .map(([key, count]) => ({
                key,
                label: formatLabel(key),
                count
            }))
        ];
    }, [assets]);
    const visibleAssets = (0, react_1.useMemo)(() => {
        const normalizedSearch = searchTerm
            .trim()
            .toLowerCase();
        return assets.filter(asset => {
            const matchesCategory = selectedCategory ===
                'ALL' ||
                asset.category ===
                    selectedCategory;
            if (!matchesCategory) {
                return false;
            }
            if (!normalizedSearch) {
                return true;
            }
            const searchableText = [
                asset.assetName,
                asset.assetType,
                asset.category,
                asset.projectName,
                asset.uploadedByName,
                asset.tags,
                asset.description
            ]
                .filter(Boolean)
                .join(' ')
                .toLowerCase();
            return searchableText
                .includes(normalizedSearch);
        });
    }, [
        assets,
        selectedCategory,
        searchTerm
    ]);
    const clientName = assets[0]
        ?.project
        ?.clientName ||
        fallbackName;
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    return (h("div", { className: "dashboard-page" },
        h(ClientSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("button", { type: "button", className: "topbar-icon-button notification-button", "aria-label": "Notifications", onClick: () => navigate('/client/dashboard') },
                        h(lucide_react_1.Bell, { size: 27 }),
                        unreadCount > 0 &&
                            (h("span", { className: "notification-dot" }, unreadCount > 9
                                ? '9+'
                                : unreadCount))),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, clientName),
                                    h("span", null, email)),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "asset-library-main" },
                h("div", { className: "asset-library-heading" },
                    h("p", { className: "asset-library-eyebrow" }, "Library"),
                    h("h1", null, "Asset Library"),
                    h("span", null, "Browse design assets available in your projects.")),
                error &&
                    (h("div", { className: "dashboard-error" }, error)),
                h("div", { className: "asset-library-controls" },
                    h("div", { className: "asset-library-search" },
                        h(lucide_react_1.Search, { size: 19 }),
                        h("input", { type: "text", placeholder: "Search assets...", value: searchTerm, onChange: event => setSearchTerm(event.target.value), "aria-label": "Search assets" }),
                        searchTerm &&
                            (h("button", { type: "button", onClick: () => setSearchTerm(''), "aria-label": "Clear search" }, "\u00D7"))),
                    h("div", { className: "asset-category-filters" }, categoryFilters.map(filter => (h("button", { type: "button", key: filter.key, className: selectedCategory ===
                            filter.key
                            ? 'asset-category-filter asset-category-filter-active'
                            : 'asset-category-filter', onClick: () => setSelectedCategory(filter.key) },
                        filter.label,
                        h("span", null, filter.count)))))),
                h("section", { className: "asset-library-table-card" },
                    h("div", { className: "asset-library-table-header" },
                        h("span", null, "Preview"),
                        h("span", null, "Asset Name"),
                        h("span", null, "Asset Type"),
                        h("span", null, "Category"),
                        h("span", null, "Project"),
                        h("span", null, "Current Version"),
                        h("span", null, "Uploaded By"),
                        h("span", null, "Upload Date"),
                        h("span", null)),
                    loading
                        ? (h("div", { className: "asset-library-state" }, "Loading assets..."))
                        : visibleAssets.length === 0
                            ? (h("div", { className: "asset-library-state" },
                                h(lucide_react_1.Layers3, { size: 36 }),
                                h("strong", null, "No assets found"),
                                h("span", null, "Try another category or search term.")))
                            : (visibleAssets.map(asset => (h("article", { className: "asset-library-row", key: asset.assetId },
                                h("div", { className: "asset-preview-box" },
                                    h(lucide_react_1.Box, { size: 24 })),
                                h("div", { className: "asset-library-name" },
                                    h("strong", null, asset.assetName),
                                    asset.versionCount >
                                        0 &&
                                        (h("span", null,
                                            asset.versionCount,
                                            asset.versionCount ===
                                                1
                                                ? ' version'
                                                : ' versions'))),
                                h("div", null,
                                    h("span", { className: "asset-type-badge" }, formatLabel(asset.assetType))),
                                h("div", null,
                                    h("span", { className: "asset-category-badge" }, formatLabel(asset.category))),
                                h("div", { className: "asset-project-cell" },
                                    h(lucide_react_1.FolderOpen, { size: 16 }),
                                    h("span", null, asset.projectName)),
                                h("div", { className: "asset-current-version-cell" }, asset.currentVersionNumber
                                    ? `v${asset.currentVersionNumber}`
                                    : '—'),
                                h("div", { className: "asset-uploader-cell" },
                                    h(lucide_react_1.UserRound, { size: 22 }),
                                    h("span", null, asset.uploadedByName)),
                                h("div", null, formatDate(asset.uploadDate)),
                                h("div", { className: "asset-view-cell" },
                                    h("button", { type: "button", className: "asset-library-view-button", onClick: () => navigate(`/client/projects/${asset.projectId}`) },
                                        "View",
                                        h(lucide_react_1.ChevronRight, { size: 15 }))))))))))));
}
exports.default = ClientAssetLibraryPage;

});
__register("src/pages/ClientConsultationPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ClientSidebar_1 = __importDefault(require("../components/ClientSidebar"));
const authService_1 = require("../services/authService");
const consultationService_1 = require("../services/consultationService");
require("../styles/Dashboard.css");
require("../styles/Consultation.css");
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function formatStatus(status) {
    if (status ===
        'PROJECT_CREATED') {
        return 'Project Created';
    }
    return 'Pending Project Creation';
}
function formatBudget(budget) {
    if (budget === null ||
        budget === undefined ||
        budget === '') {
        return 'Not provided';
    }
    const amount = Number(budget);
    if (Number.isNaN(amount)) {
        return String(budget);
    }
    return new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        maximumFractionDigits: 2
    }).format(amount);
}
function ClientConsultationPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [consultations, setConsultations] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [submitting, setSubmitting] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    const [success, setSuccess] = (0, react_1.useState)('');
    const [form, setForm] = (0, react_1.useState)({
        requirements: '',
        budget: '',
        timeline: '',
        spaceInformation: '',
        stylePreferences: '',
        references: ''
    });
    const email = (0, authService_1.getStoredEmail)() || '';
    const clientName = (0, authService_1.getStoredDisplayName)('Client');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        async function loadData() {
            try {
                const data = await (0, consultationService_1.loadMyConsultations)();
                if (cancelled) {
                    return;
                }
                setConsultations(data);
                setError('');
            }
            catch (err) {
                if (cancelled) {
                    return;
                }
                if (err.message ===
                    'Your session has expired. Please log in again.') {
                    navigate('/login', {
                        replace: true
                    });
                    return;
                }
                setError(err.message ||
                    'Unable to load your consultations.');
            }
            finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadData();
        return () => {
            cancelled =
                true;
        };
    }, [navigate]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    function updateField(field, value) {
        setForm(previous => ({
            ...previous,
            [field]: value
        }));
        setError('');
        setSuccess('');
    }
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    async function handleSubmit(event) {
        event.preventDefault();
        if (!form.requirements.trim()) {
            setError('Project requirements are required.');
            return;
        }
        if (form.budget === '' ||
            Number(form.budget) < 0) {
            setError('Please enter a valid project budget.');
            return;
        }
        if (!form.timeline.trim()) {
            setError('Project timeline is required.');
            return;
        }
        if (!form.spaceInformation.trim()) {
            setError('Space information is required.');
            return;
        }
        if (!form.stylePreferences.trim()) {
            setError('Style preferences are required.');
            return;
        }
        try {
            setSubmitting(true);
            setError('');
            setSuccess('');
            const created = await (0, consultationService_1.submitClientConsultation)(form);
            setConsultations(previous => [
                created,
                ...previous
            ]);
            setForm({
                requirements: '',
                budget: '',
                timeline: '',
                spaceInformation: '',
                stylePreferences: '',
                references: ''
            });
            setSuccess('Consultation submitted successfully. The Project Manager can now review it and create your project.');
        }
        catch (err) {
            setError(err.message ||
                'Unable to submit the consultation.');
        }
        finally {
            setSubmitting(false);
        }
    }
    return (h("div", { className: "dashboard-page" },
        h(ClientSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Open profile menu" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, clientName),
                                    h("span", null, email),
                                    h("small", null, "Client")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "consultation-main" },
                h("div", { className: "consultation-heading" },
                    h("div", null,
                        h("p", null, "Project Intake"),
                        h("h1", null, "Client Consultation"),
                        h("span", null, "Submit your project requirements before the Project Manager creates the project workspace.")),
                    h(lucide_react_1.ClipboardList, { size: 28 })),
                error &&
                    (h("div", { className: "consultation-alert consultation-alert-error" }, error)),
                success &&
                    (h("div", { className: "consultation-alert consultation-alert-success" },
                        h(lucide_react_1.CheckCircle2, { size: 18 }),
                        h("span", null, success))),
                h("div", { className: "consultation-layout" },
                    h("form", { className: "consultation-card", onSubmit: handleSubmit },
                        h("div", { className: "consultation-card-header" },
                            h("div", null,
                                h("h2", null, "Consultation Details"),
                                h("span", null, "Fields marked with * are required.")),
                            h(lucide_react_1.Send, { size: 20 })),
                        h("div", { className: "consultation-form-grid" },
                            h("label", { className: "consultation-field consultation-field-full" },
                                h("span", null, "Project Requirements *"),
                                h("textarea", { rows: 5, maxLength: 1800, value: form.requirements, placeholder: "Describe the room, design goals, required features, and expected output.", onChange: event => updateField('requirements', event.target.value) })),
                            h("label", { className: "consultation-field" },
                                h("span", null, "Budget (PHP) *"),
                                h("input", { type: "number", min: "0", step: "0.01", value: form.budget, placeholder: "150000", onChange: event => updateField('budget', event.target.value) })),
                            h("label", { className: "consultation-field" },
                                h("span", null, "Timeline *"),
                                h("input", { type: "text", maxLength: 150, value: form.timeline, placeholder: "Example: 4 weeks", onChange: event => updateField('timeline', event.target.value) })),
                            h("label", { className: "consultation-field consultation-field-full" },
                                h("span", null, "Space Information *"),
                                h("textarea", { rows: 4, maxLength: 1000, value: form.spaceInformation, placeholder: "Example: Residential living room, approximate dimensions, existing furniture, or room condition.", onChange: event => updateField('spaceInformation', event.target.value) })),
                            h("label", { className: "consultation-field consultation-field-full" },
                                h("span", null, "Style Preferences *"),
                                h("textarea", { rows: 4, maxLength: 1000, value: form.stylePreferences, placeholder: "Example: Modern minimalist, neutral colors, warm lighting, clean furniture layout.", onChange: event => updateField('stylePreferences', event.target.value) })),
                            h("label", { className: "consultation-field consultation-field-full" },
                                h("span", null, "References"),
                                h("textarea", { rows: 3, maxLength: 1000, value: form.references, placeholder: "Optional: reference links, inspiration notes, preferred materials, or other supporting information.", onChange: event => updateField('references', event.target.value) }))),
                        h("div", { className: "consultation-form-actions" },
                            h("button", { type: "submit", className: "consultation-primary-button", disabled: submitting },
                                h(lucide_react_1.Send, { size: 17 }),
                                submitting
                                    ? 'Submitting...'
                                    : 'Submit Consultation'))),
                    h("section", { className: "consultation-card consultation-history-card" },
                        h("div", { className: "consultation-card-header" },
                            h("div", null,
                                h("h2", null, "Consultation History"),
                                h("span", null, "Track whether a Project Manager has already created a project from your request.")),
                            h(lucide_react_1.Clock3, { size: 20 })),
                        h("div", { className: "consultation-history-body" }, loading
                            ? (h("div", { className: "consultation-empty" }, "Loading consultations..."))
                            : consultations.length === 0
                                ? (h("div", { className: "consultation-empty" }, "No consultations submitted yet."))
                                : consultations.map(consultation => (h("article", { className: "consultation-history-item", key: consultation.consultationId },
                                    h("div", { className: "consultation-history-top" },
                                        h("strong", null,
                                            "Consultation #",
                                            consultation.consultationId),
                                        h("span", { className: consultation.status === 'PROJECT_CREATED'
                                                ? 'consultation-status consultation-status-created'
                                                : 'consultation-status consultation-status-new' }, formatStatus(consultation.status))),
                                    h("p", null, consultation.requirements),
                                    h("div", { className: "consultation-meta-grid" },
                                        h("span", null,
                                            h("small", null, "Budget"),
                                            h("strong", null, formatBudget(consultation.budget))),
                                        h("span", null,
                                            h("small", null, "Timeline"),
                                            h("strong", null, consultation.timeline || '—')),
                                        h("span", null,
                                            h("small", null, "Submitted"),
                                            h("strong", null, formatDateTime(consultation.createdAt))))))))))))));
}
exports.default = ClientConsultationPage;

});
__register("src/pages/ClientDashboard.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ClientSidebar_1 = __importDefault(require("../components/ClientSidebar"));
const authService_1 = require("../services/authService");
const clientDashboardService_1 = require("../services/clientDashboardService");
require("../styles/Dashboard.css");
require("../styles/DashboardActions.css");
function formatDateTime(value) {
    if (!value) {
        return '';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function ActivityIcon({ activity }) {
    if (activity.type ===
        'PROJECT') {
        return (h(lucide_react_1.FolderPlus, { size: 18 }));
    }
    if (activity.type ===
        'VERSION') {
        return (h(lucide_react_1.Upload, { size: 18 }));
    }
    if (activity.status ===
        'COMPLETED') {
        return (h(lucide_react_1.CheckCircle2, { size: 18 }));
    }
    if (activity.status ===
        'FAILED') {
        return (h(lucide_react_1.CircleX, { size: 18 }));
    }
    return (h(lucide_react_1.RefreshCw, { size: 18 }));
}
function getUserDisplayName(user) {
    if (!user) {
        return '';
    }
    const firstName = user.firstName?.trim() || '';
    const lastName = user.lastName?.trim() || '';
    const fullName = `${firstName} ${lastName}`.trim();
    return (fullName ||
        user.email ||
        '');
}
function getProjectClientUser(project) {
    return (project?.client?.user ||
        project?.project?.client?.user ||
        project?.clientUser ||
        null);
}
function ClientDashboard() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const notificationPanelRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [notificationActionLoading, setNotificationActionLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    const [dashboardData, setDashboardData] = (0, react_1.useState)({
        clientName: null,
        projects: [],
        notifications: [],
        unreadCount: 0,
        recentActivity: [],
        stats: {
            activeProjects: 0,
            pendingReviews: 0,
            revisionRequests: 0,
            renderReady: 0,
            queuedOrRendering: 0
        }
    });
    (0, react_1.useEffect)(() => {
        async function loadDashboard() {
            try {
                setLoading(true);
                setError('');
                const data = await (0, clientDashboardService_1.loadClientDashboard)();
                setDashboardData(data);
            }
            catch (err) {
                setError(err.message ||
                    'Unable to load dashboard.');
                if (err.message ===
                    'Your session has expired. Please log in again.') {
                    navigate('/login', {
                        replace: true
                    });
                }
            }
            finally {
                setLoading(false);
            }
        }
        loadDashboard();
    }, [
        navigate
    ]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const email = (0, authService_1.getStoredEmail)() || '';
    const fallbackName = (0, authService_1.getStoredDisplayName)('Client');
    const clientName = (0, react_1.useMemo)(() => {
        const normalizedEmail = email
            .trim()
            .toLowerCase();
        const projects = Array.isArray(dashboardData.projects)
            ? dashboardData.projects
            : [];
        const matchingProject = projects.find(project => {
            const clientUser = getProjectClientUser(project);
            return (clientUser
                ?.email
                ?.trim()
                ?.toLowerCase() ===
                normalizedEmail);
        });
        const matchedClientUser = getProjectClientUser(matchingProject);
        const matchedClientName = getUserDisplayName(matchedClientUser);
        if (matchedClientName) {
            return matchedClientName;
        }
        const firstProjectClientUser = getProjectClientUser(projects[0]);
        const firstProjectClientName = getUserDisplayName(firstProjectClientUser);
        if (firstProjectClientName) {
            return firstProjectClientName;
        }
        const projectClientName = projects.find(project => project?.clientName)?.clientName;
        if (projectClientName) {
            return projectClientName;
        }
        return (dashboardData.clientName ||
            fallbackName ||
            'Client');
    }, [
        dashboardData.clientName,
        dashboardData.projects,
        email,
        fallbackName
    ]);
    const recentNotifications = dashboardData.notifications
        .slice()
        .sort((a, b) => new Date(b.createdAt || 0) -
        new Date(a.createdAt || 0))
        .slice(0, 5);
    const recentActivity = dashboardData
        .recentActivity
        .slice(0, 5);
    const dashboardStats = [
        {
            label: 'Active projects',
            value: dashboardData
                .stats
                .activeProjects,
            Icon: lucide_react_1.Folder
        },
        {
            label: 'Pending reviews',
            value: dashboardData
                .stats
                .pendingReviews,
            Icon: lucide_react_1.Eye
        },
        {
            label: 'Revision requests',
            value: dashboardData
                .stats
                .revisionRequests,
            Icon: lucide_react_1.RefreshCw
        },
        {
            label: 'Render ready',
            value: dashboardData
                .stats
                .renderReady,
            Icon: lucide_react_1.Check
        },
        {
            label: 'Queued / rendering jobs',
            value: dashboardData
                .stats
                .queuedOrRendering,
            Icon: lucide_react_1.ListChecks
        }
    ];
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    function handleBellClick() {
        notificationPanelRef
            .current
            ?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
    async function handleNotificationClick(notification) {
        if (notification.isRead === true) {
            return;
        }
        try {
            await (0, clientDashboardService_1.markNotificationAsRead)(notification.notificationId);
            setDashboardData(previous => ({
                ...previous,
                unreadCount: Math.max(0, previous.unreadCount - 1),
                notifications: previous.notifications.map(item => item.notificationId ===
                    notification.notificationId
                    ? {
                        ...item,
                        isRead: true
                    }
                    : item)
            }));
        }
        catch (err) {
            setError(err.message ||
                'Unable to update notification.');
        }
    }
    async function handleMarkAllRead() {
        if (dashboardData.unreadCount === 0) {
            return;
        }
        try {
            setNotificationActionLoading(true);
            await (0, clientDashboardService_1.markAllNotificationsAsRead)();
            setDashboardData(previous => ({
                ...previous,
                unreadCount: 0,
                notifications: previous.notifications.map(notification => ({
                    ...notification,
                    isRead: true
                }))
            }));
        }
        catch (err) {
            setError(err.message ||
                'Unable to mark notifications as read.');
        }
        finally {
            setNotificationActionLoading(false);
        }
    }
    return (h("div", { className: "dashboard-page" },
        h(ClientSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "dashboard-search" },
                        h(lucide_react_1.Search, { size: 20, className: "dashboard-search-icon" }),
                        h("input", { type: "text", placeholder: "Search", "aria-label": "Search" })),
                    h("button", { type: "button", className: "topbar-icon-button notification-button", "aria-label": "Notifications", onClick: handleBellClick },
                        h(lucide_react_1.Bell, { size: 27 }),
                        dashboardData.unreadCount > 0 &&
                            (h("span", { className: "notification-dot" }, dashboardData.unreadCount > 9
                                ? '9+'
                                : dashboardData.unreadCount))),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", "aria-label": "Profile", onClick: () => setProfileOpen(previous => !previous) },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, clientName),
                                    h("span", null, email)),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "dashboard-main" },
                h("section", { className: "welcome-banner" },
                    h("div", { className: "welcome-banner-overlay" }),
                    h("div", { className: "welcome-banner-content" },
                        h("h1", null,
                            "Welcome, ",
                            clientName))),
                error &&
                    (h("div", { className: "dashboard-error" }, error)),
                h("section", { className: "dashboard-stats" }, dashboardStats.map(({ label, value, Icon }) => (h("article", { className: "dashboard-stat-card", key: label },
                    h("div", { className: "stat-card-top" },
                        h("div", { className: "stat-icon-box" },
                            h(Icon, { size: 24 })),
                        h("p", null, label)),
                    h("div", { className: "stat-card-value" },
                        h("strong", null, loading
                            ? '—'
                            : value),
                        h("span", null, "\u2192")))))),
                h("section", { className: "dashboard-lower-grid" },
                    h("article", { className: "dashboard-panel" },
                        h("div", { className: "dashboard-panel-header" },
                            h("h2", null, "Recent Activity"),
                            h("button", { type: "button", className: "dashboard-panel-action", onClick: () => navigate('/client/activity') }, "View all")),
                        loading
                            ? (h("div", { className: "dashboard-empty-state" },
                                h(lucide_react_1.RefreshCw, { size: 30, className: "dashboard-loading-icon" }),
                                h("p", null, "Loading activity...")))
                            : recentActivity.length > 0
                                ? (h("div", { className: "dashboard-activity-list" }, recentActivity.map(activity => (h("div", { className: "dashboard-activity-item", key: activity.id },
                                    h("div", { className: "activity-icon" },
                                        h(ActivityIcon, { activity: activity })),
                                    h("div", { className: "activity-content" },
                                        h("p", null,
                                            h("strong", null, activity.title),
                                            h("span", { className: "activity-message" }, activity.message)),
                                        h("span", { className: "activity-time" }, formatDateTime(activity.timestamp))))))))
                                : (h("div", { className: "dashboard-empty-state" },
                                    h(lucide_react_1.RefreshCw, { size: 30 }),
                                    h("p", null, "No recent activity yet."),
                                    h("span", null, "Project activity will appear here.")))),
                    h("article", { className: "dashboard-panel", ref: notificationPanelRef },
                        h("div", { className: "dashboard-panel-header" },
                            h("h2", null, "Notifications"),
                            h("button", { type: "button", className: "dashboard-panel-action", onClick: handleMarkAllRead, disabled: dashboardData.unreadCount === 0 ||
                                    notificationActionLoading }, notificationActionLoading
                                ? 'Updating...'
                                : 'Mark all as read')),
                        loading
                            ? (h("div", { className: "dashboard-empty-state" },
                                h(lucide_react_1.Bell, { size: 30, className: "dashboard-loading-icon" }),
                                h("p", null, "Loading notifications...")))
                            : recentNotifications.length > 0
                                ? (h("div", { className: "dashboard-notification-list" }, recentNotifications.map(notification => (h("button", { type: "button", className: notification.isRead
                                        ? 'dashboard-notification-item notification-read'
                                        : 'dashboard-notification-item notification-unread', key: `notification-${notification.notificationId ||
                                        notification.createdAt}`, onClick: () => handleNotificationClick(notification) },
                                    h("div", { className: "notification-list-icon" },
                                        h(lucide_react_1.Bell, { size: 17 })),
                                    h("div", { className: "notification-list-content" },
                                        h("strong", null, notification.title ||
                                            'Notification'),
                                        h("p", null, notification.message ||
                                            'You have a new project update.'),
                                        h("span", null, formatDateTime(notification.createdAt))),
                                    !notification.isRead &&
                                        (h("span", { className: "notification-unread-dot", "aria-label": "Unread" })))))))
                                : (h("div", { className: "dashboard-empty-state" },
                                    h(lucide_react_1.Bell, { size: 30 }),
                                    h("p", null, "No notifications yet."),
                                    h("span", null, "New project updates will appear here.")))))))));
}
exports.default = ClientDashboard;

});
__register("src/pages/ClientFeedbackPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ClientSidebar_1 = __importDefault(require("../components/ClientSidebar"));
const authService_1 = require("../services/authService");
const clientDashboardService_1 = require("../services/clientDashboardService");
const clientFeedbackService_1 = require("../services/clientFeedbackService");
require("../styles/Dashboard.css");
require("../styles/ClientFeedback.css");
function formatDate(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
function getUserName(user) {
    if (!user) {
        return 'Unknown User';
    }
    const firstName = user.firstName?.trim() || '';
    const lastName = user.lastName?.trim() || '';
    const fullName = `${firstName} ${lastName}`
        .trim();
    return (fullName ||
        user.email ||
        'Unknown User');
}
function getCommentUser(comment) {
    return (comment.user ||
        comment.createdBy ||
        comment.commentedBy ||
        null);
}
function getCommentText(comment) {
    return (comment.commentText ||
        comment.feedback ||
        comment.message ||
        '');
}
function getCommentDate(comment) {
    return (comment.createdAt ||
        comment.commentedAt ||
        comment.timestamp ||
        null);
}
function sortComments(commentList) {
    return commentList
        .slice()
        .sort((a, b) => new Date(getCommentDate(a) ||
        0) -
        new Date(getCommentDate(b) ||
            0));
}
async function getResponseMessage(response, fallback) {
    try {
        const data = await response.json();
        return (data?.message ||
            fallback);
    }
    catch {
        return fallback;
    }
}
function ClientFeedbackPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [reviews, setReviews] = (0, react_1.useState)([]);
    const [selectedVersionId, setSelectedVersionId] = (0, react_1.useState)(null);
    const [comments, setComments] = (0, react_1.useState)([]);
    const [feedbackText, setFeedbackText] = (0, react_1.useState)('');
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [commentsLoading, setCommentsLoading] = (0, react_1.useState)(false);
    const [actionLoading, setActionLoading] = (0, react_1.useState)('');
    const [error, setError] = (0, react_1.useState)('');
    const [success, setSuccess] = (0, react_1.useState)('');
    const [unreadCount, setUnreadCount] = (0, react_1.useState)(0);
    const [fileUnavailable, setFileUnavailable] = (0, react_1.useState)(false);
    const email = (0, authService_1.getStoredEmail)() || '';
    const fallbackName = (0, authService_1.getStoredDisplayName)('Client');
    const selectedReview = (0, react_1.useMemo)(() => reviews.find(review => review.versionId ===
        selectedVersionId) ||
        reviews[0] ||
        null, [
        reviews,
        selectedVersionId
    ]);
    async function refreshWorkspace(preferredVersionId = null) {
        const data = await (0, clientFeedbackService_1.loadClientFeedback)();
        setReviews(data);
        if (!data.length) {
            setSelectedVersionId(null);
            setComments([]);
            setCommentsLoading(false);
            setFileUnavailable(false);
            return;
        }
        const preferredExists = data.some(review => review.versionId ===
            preferredVersionId);
        const nextVersionId = preferredExists
            ? preferredVersionId
            : data[0].versionId;
        setSelectedVersionId(nextVersionId);
        setComments([]);
        setCommentsLoading(true);
        setFileUnavailable(false);
    }
    function handleSelectReview(versionId) {
        if (versionId ===
            selectedReview?.versionId) {
            return;
        }
        setSelectedVersionId(versionId);
        setComments([]);
        setCommentsLoading(true);
        setFileUnavailable(false);
        setFeedbackText('');
        setError('');
        setSuccess('');
    }
    (0, react_1.useEffect)(() => {
        async function loadPage() {
            try {
                setLoading(true);
                setError('');
                const [feedbackReviews, unread] = await Promise.all([
                    (0, clientFeedbackService_1.loadClientFeedback)(),
                    (0, clientDashboardService_1.getUnreadNotificationCount)()
                ]);
                setReviews(feedbackReviews);
                setUnreadCount(unread);
                if (feedbackReviews.length) {
                    setSelectedVersionId(feedbackReviews[0]
                        .versionId);
                    setCommentsLoading(true);
                }
            }
            catch (err) {
                setError(err.message ||
                    'Unable to load client feedback.');
                if (err.message ===
                    'Your session has expired. Please log in again.') {
                    navigate('/login', {
                        replace: true
                    });
                }
            }
            finally {
                setLoading(false);
            }
        }
        loadPage();
    }, [navigate]);
    (0, react_1.useEffect)(() => {
        if (!selectedVersionId) {
            return undefined;
        }
        let cancelled = false;
        (0, clientFeedbackService_1.getCommentsForVersion)(selectedVersionId)
            .then(data => {
            if (cancelled) {
                return;
            }
            setComments(sortComments(data));
        })
            .catch(err => {
            if (cancelled) {
                return;
            }
            setError(err.message ||
                'Unable to load comments.');
        })
            .finally(() => {
            if (cancelled) {
                return;
            }
            setCommentsLoading(false);
        });
        return () => {
            cancelled = true;
        };
    }, [selectedVersionId]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    async function handlePostComment() {
        const text = feedbackText.trim();
        if (!text) {
            setError('Please enter your feedback first.');
            return;
        }
        if (!selectedReview
            ?.clientUserId) {
            setError('Unable to determine the client account for this project.');
            return;
        }
        try {
            setActionLoading('comment');
            setError('');
            setSuccess('');
            await (0, clientFeedbackService_1.postClientComment)({
                versionId: selectedReview.versionId,
                userId: selectedReview.clientUserId,
                commentText: text
            });
            const updatedComments = await (0, clientFeedbackService_1.getCommentsForVersion)(selectedReview.versionId);
            setComments(sortComments(updatedComments));
            setFeedbackText('');
            setSuccess('Your comment was posted.');
        }
        catch (err) {
            setError(err.message ||
                'Unable to post comment.');
        }
        finally {
            setActionLoading('');
        }
    }
    async function handleRequestRevision() {
        const text = feedbackText.trim();
        if (!text) {
            setError('Please describe the requested changes before requesting a revision.');
            return;
        }
        const confirmed = window.confirm('Request a revision for this design version?');
        if (!confirmed) {
            return;
        }
        try {
            setActionLoading('revision');
            setError('');
            setSuccess('');
            await (0, clientFeedbackService_1.requestClientRevision)({
                versionId: selectedReview.versionId,
                feedback: text
            });
            setFeedbackText('');
            setSuccess('Revision requested successfully. The designer has been notified.');
            await refreshWorkspace();
        }
        catch (err) {
            setError(err.message ||
                'Unable to request revision.');
        }
        finally {
            setActionLoading('');
        }
    }
    async function handleApprove() {
        const confirmed = window.confirm('Approve this design version for rendering?');
        if (!confirmed) {
            return;
        }
        try {
            setActionLoading('approve');
            setError('');
            setSuccess('');
            await (0, clientFeedbackService_1.approveClientVersion)({
                versionId: selectedReview.versionId,
                remarks: feedbackText.trim() ||
                    'Approved by client through InteriorSync.'
            });
            setFeedbackText('');
            setSuccess('Design approved successfully and marked render ready.');
            await refreshWorkspace();
        }
        catch (err) {
            setError(err.message ||
                'Unable to approve version.');
        }
        finally {
            setActionLoading('');
        }
    }
    async function handleDownload() {
        if (!selectedReview
            ?.versionId ||
            fileUnavailable) {
            return;
        }
        try {
            setActionLoading('download');
            setError('');
            const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/${selectedReview.versionId}/download`);
            if (!response.ok) {
                const message = await getResponseMessage(response, 'Unable to download design file.');
                if (message ===
                    'Stored file does not exist') {
                    setFileUnavailable(true);
                    return;
                }
                throw new Error(message);
            }
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href = url;
            const disposition = response.headers.get('content-disposition');
            const fileName = disposition
                ?.match(/filename="?([^"]+)"?/)?.[1];
            anchor.download =
                fileName ||
                    `interiorsync-version-${selectedReview.versionNumber}`;
            document.body.appendChild(anchor);
            anchor.click();
            anchor.remove();
            URL.revokeObjectURL(url);
        }
        catch (err) {
            if (err.message ===
                'Your session has expired. Please log in again.') {
                navigate('/login', {
                    replace: true
                });
                return;
            }
            setError(err.message ||
                'Unable to download design file.');
        }
        finally {
            setActionLoading('');
        }
    }
    return (h("div", { className: "dashboard-page" },
        h(ClientSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("button", { type: "button", className: "topbar-icon-button notification-button", "aria-label": "Notifications", onClick: () => navigate('/client/dashboard') },
                        h(lucide_react_1.Bell, { size: 27 }),
                        unreadCount > 0 &&
                            (h("span", { className: "notification-dot" }, unreadCount > 9
                                ? '9+'
                                : unreadCount))),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, fallbackName),
                                    h("span", null, email)),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "client-feedback-main" },
                h("div", { className: "client-feedback-heading" },
                    h("div", null,
                        h("p", { className: "client-feedback-eyebrow" }, "Production"),
                        h("h1", null, "Client Feedback"),
                        h("span", null, "Review submitted design versions, leave feedback, request revisions, or approve a design.")),
                    selectedReview &&
                        (h("span", { className: "feedback-awaiting-badge" },
                            h("span", null),
                            "Awaiting your review"))),
                error &&
                    (h("div", { className: "dashboard-error" }, error)),
                success &&
                    (h("div", { className: "feedback-success" }, success)),
                loading
                    ? (h("section", { className: "feedback-empty-state" },
                        h(lucide_react_1.RefreshCw, { size: 34, className: "dashboard-loading-icon" }),
                        h("strong", null, "Loading reviews...")))
                    : !selectedReview
                        ? (h("section", { className: "feedback-empty-state" },
                            h(lucide_react_1.Check, { size: 40 }),
                            h("strong", null, "No designs awaiting your review"),
                            h("span", null, "New design submissions will appear here when your designer sends a version for review.")))
                        : (h(Fragment, null,
                            reviews.length > 1 &&
                                (h("div", { className: "feedback-review-selector" },
                                    h("span", null, "Pending reviews"),
                                    h("div", null, reviews.map(review => (h("button", { type: "button", key: review.versionId, className: selectedReview.versionId ===
                                            review.versionId
                                            ? 'feedback-review-chip feedback-review-chip-active'
                                            : 'feedback-review-chip', onClick: () => handleSelectReview(review.versionId) },
                                        review.projectName,
                                        ' · ',
                                        "v",
                                        review.versionNumber)))))),
                            h("section", { className: "feedback-workspace" },
                                h("div", { className: "feedback-design-column" },
                                    h("p", { className: "feedback-section-label" }, "Design Preview"),
                                    h("div", { className: "feedback-preview" },
                                        h(lucide_react_1.FileBox, { size: 52 }),
                                        h("strong", null, selectedReview.assetName),
                                        h("span", null,
                                            "Version ",
                                            selectedReview.versionNumber),
                                        h("p", null, "3D project files are managed by InteriorSync, but are not rendered directly in the browser."),
                                        h("button", { type: "button", className: "feedback-download-file", onClick: handleDownload, disabled: fileUnavailable ||
                                                actionLoading ===
                                                    'download' },
                                            h(lucide_react_1.Download, { size: 17 }),
                                            fileUnavailable
                                                ? 'File unavailable'
                                                : actionLoading ===
                                                    'download'
                                                    ? 'Downloading...'
                                                    : 'Download design file')),
                                    h("div", { className: "feedback-current-version" },
                                        h("h2", null,
                                            "Current version: v",
                                            selectedReview.versionNumber),
                                        h("div", { className: "feedback-version-strip" }, selectedReview
                                            .versions
                                            .map(version => (h("div", { key: version.versionId, className: version.versionId ===
                                                selectedReview.versionId
                                                ? 'feedback-version-tile feedback-version-tile-current'
                                                : 'feedback-version-tile' },
                                            h(lucide_react_1.FileBox, { size: 20 }),
                                            h("span", null,
                                                "v",
                                                version.versionNumber)))))),
                                    h("div", { className: "feedback-designer-note" },
                                        h("span", null, "Designer Notes"),
                                        h("p", null, selectedReview.changeNotes ||
                                            'No designer notes were provided for this version.')),
                                    h("div", { className: "feedback-project-meta" },
                                        h("div", null,
                                            h("span", null, "Project Name"),
                                            h("strong", null, selectedReview.projectName)),
                                        h("div", null,
                                            h("span", null, "Designer"),
                                            h("strong", null, getUserName(selectedReview.uploadedBy))),
                                        h("div", null,
                                            h("span", null, "Uploaded"),
                                            h("strong", null, formatDate(selectedReview.uploadedAt))))),
                                h("aside", { className: "feedback-comments-column" },
                                    h("div", { className: "feedback-comments-header" },
                                        h("h2", null, "Existing comments"),
                                        h("span", null,
                                            comments.length,
                                            comments.length ===
                                                1
                                                ? ' comment on this version'
                                                : ' comments on this version')),
                                    h("div", { className: "feedback-comments-list" }, commentsLoading
                                        ? (h("div", { className: "feedback-comments-empty" }, "Loading comments..."))
                                        : comments.length ===
                                            0
                                            ? (h("div", { className: "feedback-comments-empty" },
                                                h(lucide_react_1.MessageCircle, { size: 26 }),
                                                "No comments yet."))
                                            : (comments.map((comment, index) => (h("article", { className: "feedback-comment", key: comment.commentId ||
                                                    `${getCommentDate(comment)}-${index}` },
                                                h("div", { className: "feedback-comment-user" },
                                                    h(lucide_react_1.UserRound, { size: 26 }),
                                                    h("div", null,
                                                        h("strong", null, getUserName(getCommentUser(comment))),
                                                        h("span", null, formatDate(getCommentDate(comment))))),
                                                h("p", null, getCommentText(comment))))))),
                                    h("div", { className: "feedback-form" },
                                        h("textarea", { value: feedbackText, onChange: event => setFeedbackText(event.target.value), placeholder: "Add your feedback on this version...", disabled: Boolean(actionLoading) }),
                                        h("button", { type: "button", className: "feedback-post-comment", onClick: handlePostComment, disabled: !feedbackText.trim() ||
                                                Boolean(actionLoading) }, actionLoading ===
                                            'comment'
                                            ? 'Posting...'
                                            : 'Post comment')),
                                    h("div", { className: "feedback-decision-actions" },
                                        h("button", { type: "button", className: "feedback-approve-button", onClick: handleApprove, disabled: Boolean(actionLoading) },
                                            h(lucide_react_1.Check, { size: 18 }),
                                            actionLoading ===
                                                'approve'
                                                ? 'Approving...'
                                                : 'Approve'),
                                        h("button", { type: "button", className: "feedback-revision-button", onClick: handleRequestRevision, disabled: Boolean(actionLoading) },
                                            h(lucide_react_1.RefreshCw, { size: 17 }),
                                            actionLoading ===
                                                'revision'
                                                ? 'Submitting...'
                                                : 'Request Revision'),
                                        h("p", null, "Your assigned designer will be notified after your decision."))))))))));
}
exports.default = ClientFeedbackPage;

});
__register("src/pages/ClientProjectDetailsPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ClientSidebar_1 = __importDefault(require("../components/ClientSidebar"));
const ClientProjectAssetsTab_1 = __importDefault(require("../components/ClientProjectAssetsTab"));
const ClientProjectFeedbackTab_1 = __importDefault(require("../components/ClientProjectFeedbackTab"));
const ClientProjectFinalOutputTab_1 = __importDefault(require("../components/ClientProjectFinalOutputTab"));
const ClientProjectRenderJobsTab_1 = __importDefault(require("../components/ClientProjectRenderJobsTab"));
const ClientProjectVersionsTab_1 = __importDefault(require("../components/ClientProjectVersionsTab"));
const authService_1 = require("../services/authService");
const clientDashboardService_1 = require("../services/clientDashboardService");
const clientProjectService_1 = require("../services/clientProjectService");
require("../styles/Dashboard.css");
require("../styles/ClientProjectDetails.css");
const STATUS_CONFIG = {
    DRAFT: {
        label: 'Draft',
        className: 'details-status-draft'
    },
    FOR_REVIEW: {
        label: 'For review',
        className: 'details-status-review'
    },
    REVISION_REQUESTED: {
        label: 'Revision requested',
        className: 'details-status-revision'
    },
    APPROVED: {
        label: 'Approved',
        className: 'details-status-approved'
    },
    RENDERING: {
        label: 'Rendering',
        className: 'details-status-rendering'
    },
    COMPLETED: {
        label: 'Completed',
        className: 'details-status-completed'
    },
    DELIVERED: {
        label: 'Delivered',
        className: 'details-status-completed'
    },
    FAILED: {
        label: 'Failed',
        className: 'details-status-failed'
    }
};
const TABS = [
    'Overview',
    'Assets',
    'Versions',
    'Feedback',
    'Render jobs',
    'Final Output'
];
function formatDate(value) {
    if (!value) {
        return 'Not available';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return 'Not available';
    }
    return date.toLocaleDateString(undefined, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}
async function getResponseMessage(response, fallback) {
    try {
        const data = await response.json();
        return (data?.message ||
            fallback);
    }
    catch {
        return fallback;
    }
}
function ClientProjectDetailsPage() {
    const { projectId } = (0, react_router_dom_1.useParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [activeTab, setActiveTab] = (0, react_1.useState)('Overview');
    const [selectedAssetId, setSelectedAssetId] = (0, react_1.useState)(null);
    const [projectData, setProjectData] = (0, react_1.useState)(null);
    const [unreadCount, setUnreadCount] = (0, react_1.useState)(0);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [renderPreviewUrl, setRenderPreviewUrl] = (0, react_1.useState)(null);
    const [renderPreviewType, setRenderPreviewType] = (0, react_1.useState)('');
    const [renderFileState, setRenderFileState] = (0, react_1.useState)('none');
    const [renderFileMessage, setRenderFileMessage] = (0, react_1.useState)('');
    const [downloadingVersionId, setDownloadingVersionId] = (0, react_1.useState)(null);
    const [unavailableVersionIds, setUnavailableVersionIds] = (0, react_1.useState)(() => new Set());
    const email = (0, authService_1.getStoredEmail)() || '';
    const fallbackName = (0, authService_1.getStoredDisplayName)('Client');
    const clientDisplayName = projectData?.clientName ||
        fallbackName;
    (0, react_1.useEffect)(() => {
        async function loadPage() {
            try {
                setLoading(true);
                setError('');
                const [details, unread] = await Promise.all([
                    (0, clientProjectService_1.loadClientProjectDetails)(projectId),
                    (0, clientDashboardService_1.getUnreadNotificationCount)()
                ]);
                setProjectData(details);
                setUnreadCount(unread);
            }
            catch (err) {
                setError(err.message ||
                    'Unable to load project details.');
                if (err.message ===
                    'Your session has expired. Please log in again.') {
                    navigate('/login', {
                        replace: true
                    });
                }
            }
            finally {
                setLoading(false);
            }
        }
        loadPage();
    }, [
        projectId,
        navigate
    ]);
    (0, react_1.useEffect)(() => {
        let objectUrl = null;
        async function loadPreview() {
            const outputId = projectData
                ?.latestOutput
                ?.outputId;
            if (!outputId) {
                setRenderPreviewUrl(null);
                setRenderPreviewType('');
                setRenderFileState('none');
                setRenderFileMessage('');
                return;
            }
            try {
                setRenderFileState('checking');
                setRenderFileMessage('');
                const response = await (0, authService_1.authenticatedFetch)(`/api/render-outputs/${outputId}/view`);
                if (!response.ok) {
                    const message = await getResponseMessage(response, 'The stored final render file is unavailable.');
                    setRenderPreviewUrl(null);
                    setRenderPreviewType('');
                    setRenderFileState('unavailable');
                    setRenderFileMessage(message);
                    return;
                }
                const blob = await response.blob();
                setRenderPreviewType(blob.type || '');
                setRenderFileState('available');
                if (blob.type
                    ?.toLowerCase()
                    .startsWith('image/')) {
                    objectUrl =
                        URL.createObjectURL(blob);
                    setRenderPreviewUrl(objectUrl);
                }
                else {
                    setRenderPreviewUrl(null);
                }
            }
            catch (err) {
                if (err.message ===
                    'Your session has expired. Please log in again.') {
                    navigate('/login', {
                        replace: true
                    });
                    return;
                }
                setRenderPreviewUrl(null);
                setRenderPreviewType('');
                setRenderFileState('unavailable');
                setRenderFileMessage('The stored final render file is unavailable.');
            }
        }
        loadPreview();
        return () => {
            if (objectUrl) {
                URL.revokeObjectURL(objectUrl);
            }
        };
    }, [
        projectData
            ?.latestOutput
            ?.outputId,
        navigate
    ]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    function markRenderUnavailable(message) {
        setRenderPreviewUrl(null);
        setRenderFileState('unavailable');
        setRenderFileMessage(message ||
            'The stored final render file is unavailable.');
    }
    async function handleViewOutput() {
        const outputId = projectData
            ?.latestOutput
            ?.outputId;
        if (!outputId ||
            renderFileState !==
                'available') {
            return;
        }
        try {
            const response = await (0, authService_1.authenticatedFetch)(`/api/render-outputs/${outputId}/view`);
            if (!response.ok) {
                const message = await getResponseMessage(response, 'The stored final render file is unavailable.');
                markRenderUnavailable(message);
                return;
            }
            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);
            window.open(objectUrl, '_blank', 'noopener,noreferrer');
            window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);
        }
        catch (err) {
            if (err.message ===
                'Your session has expired. Please log in again.') {
                navigate('/login', {
                    replace: true
                });
                return;
            }
            markRenderUnavailable('The stored final render file is unavailable.');
        }
    }
    async function handleDownloadOutput() {
        const output = projectData
            ?.latestOutput;
        if (!output?.outputId ||
            renderFileState !==
                'available') {
            return;
        }
        try {
            const response = await (0, authService_1.authenticatedFetch)(`/api/render-outputs/${output.outputId}/download`);
            if (!response.ok) {
                const message = await getResponseMessage(response, 'The stored final render file is unavailable.');
                markRenderUnavailable(message);
                return;
            }
            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href =
                objectUrl;
            anchor.download =
                output.fileName ||
                    'interiorsync-final-output';
            document.body.appendChild(anchor);
            anchor.click();
            anchor.remove();
            URL.revokeObjectURL(objectUrl);
        }
        catch (err) {
            if (err.message ===
                'Your session has expired. Please log in again.') {
                navigate('/login', {
                    replace: true
                });
                return;
            }
            markRenderUnavailable('The stored final render file is unavailable.');
        }
    }
    async function handleDownloadVersion(version) {
        if (!version?.versionId) {
            return;
        }
        try {
            setError('');
            setDownloadingVersionId(version.versionId);
            const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/${version.versionId}/download`);
            if (!response.ok) {
                const message = await getResponseMessage(response, 'Unable to download this design version.');
                if (message ===
                    'Stored file does not exist') {
                    setUnavailableVersionIds(previous => {
                        const next = new Set(previous);
                        next.add(version.versionId);
                        return next;
                    });
                    return;
                }
                throw new Error(message);
            }
            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href =
                objectUrl;
            const contentDisposition = response.headers.get('content-disposition');
            const matchedFileName = contentDisposition
                ?.match(/filename="?([^"]+)"?/)?.[1];
            anchor.download =
                matchedFileName ||
                    `interiorsync-version-${version.versionNumber}`;
            document.body.appendChild(anchor);
            anchor.click();
            anchor.remove();
            URL.revokeObjectURL(objectUrl);
        }
        catch (err) {
            if (err.message ===
                'Your session has expired. Please log in again.') {
                navigate('/login', {
                    replace: true
                });
                return;
            }
            setError(err.message ||
                'Unable to download this design version.');
        }
        finally {
            setDownloadingVersionId(null);
        }
    }
    function handleOpenAssetVersions(assetId) {
        setSelectedAssetId(assetId);
        setActiveTab('Versions');
    }
    const workflowStatus = projectData?.projectStatus ===
        'DELIVERED'
        ? STATUS_CONFIG.DELIVERED
        : (STATUS_CONFIG[projectData?.workflowStatus] ||
            STATUS_CONFIG.DRAFT);
    const outputAvailable = renderFileState ===
        'available';
    return (h("div", { className: "dashboard-page" },
        h(ClientSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "dashboard-search" },
                        h(lucide_react_1.Search, { size: 20, className: "dashboard-search-icon" }),
                        h("input", { type: "text", placeholder: "Search", "aria-label": "Search" })),
                    h("button", { type: "button", className: "topbar-icon-button notification-button", "aria-label": "Notifications", onClick: () => navigate('/client/dashboard') },
                        h(lucide_react_1.Bell, { size: 27 }),
                        unreadCount > 0 &&
                            (h("span", { className: "notification-dot" }, unreadCount > 9
                                ? '9+'
                                : unreadCount))),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, clientDisplayName),
                                    h("span", null, email)),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "project-details-main" },
                h("button", { type: "button", className: "project-details-back", onClick: () => navigate('/client/projects') },
                    h(lucide_react_1.ArrowLeft, { size: 17 }),
                    "Projects"),
                h("div", { className: "project-details-heading" },
                    h("div", null,
                        h("p", { className: "project-details-eyebrow" }, "Project Workspace"),
                        h("h1", null, loading
                            ? 'Loading project...'
                            : projectData
                                ?.projectName ||
                                'Project'),
                        h("span", null, "Review your project progress, design files, feedback, render jobs, and final outputs."))),
                error &&
                    (h("div", { className: "dashboard-error" }, error)),
                !loading &&
                    projectData &&
                    (h(Fragment, null,
                        h("section", { className: "project-summary-card" },
                            h("div", { className: "project-summary-item" },
                                h("span", { className: "project-summary-label" }, "Client"),
                                h("strong", null, projectData
                                    .clientName)),
                            h("div", { className: "project-summary-item" },
                                h("span", { className: "project-summary-label" }, "Assigned designer"),
                                h("strong", { className: "project-summary-person" },
                                    h(lucide_react_1.UserRound, { size: 17 }),
                                    projectData
                                        .designerName)),
                            h("div", { className: "project-summary-item" },
                                h("span", { className: "project-summary-label" }, "Project manager"),
                                h("strong", { className: "project-summary-person" },
                                    h(lucide_react_1.UserRound, { size: 17 }),
                                    projectData
                                        .projectManagerName)),
                            h("div", { className: "project-summary-item" },
                                h("span", { className: "project-summary-label" }, "Current Status"),
                                h("span", { className: `project-details-status ${workflowStatus.className}` },
                                    h("span", { className: "project-details-status-dot" }),
                                    workflowStatus.label))),
                        h("section", { className: "project-progress-card" },
                            h("h2", null, "Project progress"),
                            h("div", { className: "project-progress-track" }, projectData
                                .progress
                                .map((step, index) => (h("div", { className: `project-progress-step ${step.complete
                                    ? 'progress-step-complete'
                                    : ''} ${step.current
                                    ? 'progress-step-current'
                                    : ''}`, key: step.key },
                                h("div", { className: "progress-step-line-wrap" },
                                    index > 0 &&
                                        (h("span", { className: "progress-line progress-line-left" })),
                                    h("div", { className: "progress-circle" }, step.complete &&
                                        (h(lucide_react_1.Check, { size: 17 }))),
                                    index <
                                        projectData
                                            .progress
                                            .length -
                                            1 &&
                                        (h("span", { className: "progress-line progress-line-right" }))),
                                h("span", { className: "progress-step-label" }, step.label)))))),
                        h("nav", { className: "project-details-tabs" }, TABS.map(tab => (h("button", { type: "button", key: tab, className: activeTab ===
                                tab
                                ? 'project-details-tab project-details-tab-active'
                                : 'project-details-tab', onClick: () => {
                                setActiveTab(tab);
                                if (tab !==
                                    'Versions') {
                                    setSelectedAssetId(null);
                                }
                            } }, tab)))),
                        activeTab ===
                            'Overview' &&
                            (h("section", { className: "project-overview-grid" },
                                h("article", { className: "project-overview-card requirements-card" },
                                    h("h2", null, "Requirements"),
                                    h("div", { className: "project-requirement-section" },
                                        h("span", null, "Project Description"),
                                        h("p", null, projectData
                                            .description ||
                                            'No project description was provided.')),
                                    h("div", { className: "project-requirements-divider" }),
                                    h("div", { className: "project-overview-meta-grid" },
                                        h("div", null,
                                            h("span", null, "Project Created"),
                                            h("strong", null, formatDate(projectData
                                                .createdAt))),
                                        h("div", null,
                                            h("span", null, "Consultation"),
                                            h("strong", null, projectData
                                                .consultation
                                                ? 'Recorded'
                                                : 'No consultation record')),
                                        h("div", null,
                                            h("span", null, "Design Assets"),
                                            h("strong", null, projectData
                                                .assets
                                                .length)),
                                        h("div", null,
                                            h("span", null, "Design Versions"),
                                            h("strong", null, projectData
                                                .versions
                                                .length))),
                                    !projectData
                                        .consultation &&
                                        (h("div", { className: "project-consultation-note" }, "This project does not have a linked consultation record. The available project description is shown instead."))),
                                h("article", { className: "project-overview-card latest-render-card" },
                                    h("h2", null, "Latest render"),
                                    !projectData
                                        .latestOutput
                                        ? (h("div", { className: "latest-render-empty" },
                                            h(lucide_react_1.FileImage, { size: 42 }),
                                            h("strong", null, "No final render yet"),
                                            h("span", null, "The final output will appear here once the render workflow is completed.")))
                                        : renderFileState ===
                                            'unavailable'
                                            ? (h(Fragment, null,
                                                h("div", { className: "latest-render-unavailable" },
                                                    h(lucide_react_1.AlertCircle, { size: 42 }),
                                                    h("strong", null, "Final render file unavailable"),
                                                    h("span", null, renderFileMessage ===
                                                        'Stored file does not exist'
                                                        ? 'A final output record exists, but the stored file can no longer be found.'
                                                        : renderFileMessage ||
                                                            'A final output record exists, but the stored file is unavailable.')),
                                                h("div", { className: "latest-render-info" },
                                                    h("strong", null, projectData
                                                        .latestOutput
                                                        .fileName ||
                                                        'Final Render'),
                                                    h("span", null, formatDate(projectData
                                                        .latestOutput
                                                        .uploadedAt ||
                                                        projectData
                                                            .latestOutput
                                                            .createdAt))),
                                                h("div", { className: "latest-render-actions" },
                                                    h("button", { type: "button", className: "render-secondary-button", disabled: true },
                                                        h(lucide_react_1.ExternalLink, { size: 16 }),
                                                        "View"),
                                                    h("button", { type: "button", className: "render-primary-button", disabled: true },
                                                        h(lucide_react_1.Download, { size: 16 }),
                                                        "Download"))))
                                            : (h(Fragment, null,
                                                h("div", { className: "latest-render-preview" }, renderPreviewUrl
                                                    ? (h("img", { src: renderPreviewUrl, alt: `Final render for ${projectData.projectName}` }))
                                                    : (h("div", { className: "latest-render-placeholder" },
                                                        h(lucide_react_1.FileImage, { size: 42 }),
                                                        h("span", null, renderFileState ===
                                                            'checking'
                                                            ? 'Checking final render...'
                                                            : renderPreviewType
                                                                ? 'Preview not available for this file type.'
                                                                : 'Final output available.')))),
                                                h("div", { className: "latest-render-info" },
                                                    h("strong", null, projectData
                                                        .latestOutput
                                                        .fileName ||
                                                        'Final Render'),
                                                    h("span", null, formatDate(projectData
                                                        .latestOutput
                                                        .uploadedAt ||
                                                        projectData
                                                            .latestOutput
                                                            .createdAt))),
                                                h("div", { className: "latest-render-actions" },
                                                    h("button", { type: "button", className: "render-secondary-button", onClick: handleViewOutput, disabled: !outputAvailable },
                                                        h(lucide_react_1.ExternalLink, { size: 16 }),
                                                        "View"),
                                                    h("button", { type: "button", className: "render-primary-button", onClick: handleDownloadOutput, disabled: !outputAvailable },
                                                        h(lucide_react_1.Download, { size: 16 }),
                                                        "Download"))))))),
                        activeTab ===
                            'Assets' &&
                            (h(ClientProjectAssetsTab_1.default, { assets: projectData.assets, versions: projectData.versions, downloadingVersionId: downloadingVersionId, unavailableVersionIds: unavailableVersionIds, onDownloadVersion: handleDownloadVersion, onOpenVersions: handleOpenAssetVersions })),
                        activeTab ===
                            'Versions' &&
                            (h(ClientProjectVersionsTab_1.default, { versions: projectData.versions, assetFilterId: selectedAssetId, onClearAssetFilter: () => setSelectedAssetId(null), downloadingVersionId: downloadingVersionId, unavailableVersionIds: unavailableVersionIds, onDownloadVersion: handleDownloadVersion })),
                        activeTab ===
                            'Feedback' &&
                            (h(ClientProjectFeedbackTab_1.default, { projectData: projectData })),
                        activeTab ===
                            'Render jobs' &&
                            (h(ClientProjectRenderJobsTab_1.default, { projectData: projectData, onOpenFinalOutput: () => setActiveTab('Final Output') })),
                        activeTab ===
                            'Final Output' &&
                            (h(ClientProjectFinalOutputTab_1.default, { projectData: projectData, renderPreviewUrl: renderPreviewUrl, renderPreviewType: renderPreviewType, renderFileState: renderFileState, renderFileMessage: renderFileMessage, outputAvailable: outputAvailable, onViewOutput: handleViewOutput, onDownloadOutput: handleDownloadOutput })),
                        ![
                            'Overview',
                            'Assets',
                            'Versions',
                            'Feedback',
                            'Render jobs',
                            'Final Output'
                        ].includes(activeTab) &&
                            (h("section", { className: "project-tab-coming-soon" },
                                h("strong", null, activeTab),
                                h("span", null, "This project section will be connected in the next integration step.")))))))));
}
exports.default = ClientProjectDetailsPage;

});
__register("src/pages/ClientProjectsPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ClientSidebar_1 = __importDefault(require("../components/ClientSidebar"));
const authService_1 = require("../services/authService");
const clientDashboardService_1 = require("../services/clientDashboardService");
const clientProjectService_1 = require("../services/clientProjectService");
require("../styles/Dashboard.css");
require("../styles/ClientProjects.css");
const STATUS_CONFIG = {
    DRAFT: {
        label: 'Draft',
        className: 'status-draft'
    },
    FOR_REVIEW: {
        label: 'For review',
        className: 'status-review'
    },
    REVISION_REQUESTED: {
        label: 'Revision requested',
        className: 'status-revision'
    },
    APPROVED: {
        label: 'Approved',
        className: 'status-approved'
    },
    RENDERING: {
        label: 'Rendering',
        className: 'status-rendering'
    },
    COMPLETED: {
        label: 'Completed',
        className: 'status-completed'
    },
    DELIVERED: {
        label: 'Delivered',
        className: 'status-completed'
    },
    FAILED: {
        label: 'Failed',
        className: 'status-failed'
    }
};
const FILTERS = [
    {
        key: 'ALL',
        label: 'All'
    },
    {
        key: 'DRAFT',
        label: 'Draft'
    },
    {
        key: 'FOR_REVIEW',
        label: 'For review'
    },
    {
        key: 'REVISION_REQUESTED',
        label: 'Revision requested'
    },
    {
        key: 'APPROVED',
        label: 'Approved'
    },
    {
        key: 'RENDERING',
        label: 'Rendering'
    },
    {
        key: 'COMPLETED',
        label: 'Completed'
    },
    {
        key: 'DELIVERED',
        label: 'Delivered'
    },
    {
        key: 'FAILED',
        label: 'Failed'
    }
];
function formatDate(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
function ClientProjectsPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [projects, setProjects] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [activeFilter, setActiveFilter] = (0, react_1.useState)('ALL');
    const [searchTerm, setSearchTerm] = (0, react_1.useState)('');
    const [unreadCount, setUnreadCount] = (0, react_1.useState)(0);
    const email = (0, authService_1.getStoredEmail)() || '';
    const fallbackName = (0, authService_1.getStoredDisplayName)('Client');
    const clientDisplayName = (0, react_1.useMemo)(() => {
        const projectClientName = projects[0]?.clientName;
        if (projectClientName &&
            projectClientName !==
                'Not assigned') {
            return projectClientName;
        }
        return fallbackName;
    }, [
        projects,
        fallbackName
    ]);
    (0, react_1.useEffect)(() => {
        async function loadPage() {
            try {
                setLoading(true);
                setError('');
                const [projectRows, unread] = await Promise.all([
                    (0, clientProjectService_1.loadClientProjects)(),
                    (0, clientDashboardService_1.getUnreadNotificationCount)()
                ]);
                setProjects(projectRows);
                setUnreadCount(unread);
            }
            catch (err) {
                setError(err.message ||
                    'Unable to load projects.');
                if (err.message ===
                    'Your session has expired. Please log in again.') {
                    navigate('/login', {
                        replace: true
                    });
                }
            }
            finally {
                setLoading(false);
            }
        }
        loadPage();
    }, [navigate]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const filterCounts = (0, react_1.useMemo)(() => {
        const counts = {
            ALL: projects.length
        };
        for (const filter of FILTERS) {
            if (filter.key ===
                'ALL') {
                continue;
            }
            counts[filter.key] =
                projects.filter(project => {
                    if (filter.key ===
                        'DELIVERED') {
                        return (project.projectStatus ===
                            'DELIVERED');
                    }
                    return (project.projectStatus !==
                        'DELIVERED' &&
                        project.workflowStatus ===
                            filter.key);
                }).length;
        }
        return counts;
    }, [projects]);
    const visibleProjects = (0, react_1.useMemo)(() => {
        const normalizedSearch = searchTerm
            .trim()
            .toLowerCase();
        return projects.filter(project => {
            const matchesStatus = activeFilter ===
                'ALL'
                ? true
                : activeFilter ===
                    'DELIVERED'
                    ? project.projectStatus ===
                        'DELIVERED'
                    : (project.projectStatus !==
                        'DELIVERED' &&
                        project.workflowStatus ===
                            activeFilter);
            if (!matchesStatus) {
                return false;
            }
            if (!normalizedSearch) {
                return true;
            }
            return (project.projectName
                .toLowerCase()
                .includes(normalizedSearch) ||
                project.clientName
                    .toLowerCase()
                    .includes(normalizedSearch) ||
                project.designerName
                    .toLowerCase()
                    .includes(normalizedSearch) ||
                project.projectManagerName
                    .toLowerCase()
                    .includes(normalizedSearch));
        });
    }, [
        projects,
        activeFilter,
        searchTerm
    ]);
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    return (h("div", { className: "dashboard-page" },
        h(ClientSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "dashboard-search" },
                        h(lucide_react_1.Search, { size: 20, className: "dashboard-search-icon" }),
                        h("input", { type: "text", placeholder: "Search projects...", value: searchTerm, onChange: event => setSearchTerm(event.target.value), "aria-label": "Search projects" })),
                    h("button", { type: "button", className: "topbar-icon-button notification-button", "aria-label": "Notifications", onClick: () => navigate('/client/dashboard') },
                        h(lucide_react_1.Bell, { size: 27 }),
                        unreadCount > 0 &&
                            (h("span", { className: "notification-dot" }, unreadCount > 9
                                ? '9+'
                                : unreadCount))),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, clientDisplayName),
                                    h("span", null, email)),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "projects-page-main" },
                h("div", { className: "projects-page-heading" },
                    h("h1", null, "Project List"),
                    h("p", null, "Every project currently moving through the studio.")),
                error &&
                    (h("div", { className: "dashboard-error" }, error)),
                h("div", { className: "project-filter-bar" }, FILTERS.map(filter => (h("button", { type: "button", key: filter.key, className: activeFilter ===
                        filter.key
                        ? 'project-filter project-filter-active'
                        : 'project-filter', onClick: () => setActiveFilter(filter.key) },
                    filter.label,
                    h("span", null, filterCounts[filter.key] || 0))))),
                h("section", { className: "project-table-card" },
                    h("div", { className: "project-table-header" },
                        h("span", null, "Project Name"),
                        h("span", null, "Client"),
                        h("span", null, "Interior Designer"),
                        h("span", null, "Project Manager"),
                        h("span", null, "Project Status"),
                        h("span", null, "Last Updated"),
                        h("span", null)),
                    loading
                        ? (h("div", { className: "project-list-state" }, "Loading projects..."))
                        : visibleProjects.length === 0
                            ? (h("div", { className: "project-list-state" },
                                h(lucide_react_1.Folder, { size: 32 }),
                                h("strong", null, "No projects found."),
                                h("span", null, "Try another status or search term.")))
                            : (visibleProjects.map(project => {
                                const status = project.projectStatus ===
                                    'DELIVERED'
                                    ? STATUS_CONFIG.DELIVERED
                                    : (STATUS_CONFIG[project.workflowStatus] ||
                                        STATUS_CONFIG.DRAFT);
                                return (h("article", { className: "project-table-row", key: project.projectId },
                                    h("div", { className: "project-name-cell" },
                                        h("strong", null, project.projectName)),
                                    h("div", null, project.clientName),
                                    h("div", { className: "project-person-cell" },
                                        h(lucide_react_1.UserRound, { size: 28 }),
                                        h("span", null, project.designerName)),
                                    h("div", { className: "project-person-cell" },
                                        h(lucide_react_1.UserRound, { size: 28 }),
                                        h("span", null, project.projectManagerName)),
                                    h("div", null,
                                        h("span", { className: `project-status-badge ${status.className}` },
                                            h("span", { className: "status-dot" }),
                                            status.label)),
                                    h("div", null, formatDate(project.lastUpdated)),
                                    h("div", { className: "project-view-cell" },
                                        h("button", { type: "button", className: "project-view-button", onClick: () => navigate(`/client/projects/${project.projectId}`) },
                                            "View project",
                                            h(lucide_react_1.ChevronRight, { size: 16 })))));
                            })))))));
}
exports.default = ClientProjectsPage;

});
__register("src/pages/ClientRenderQueuePage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ClientSidebar_1 = __importDefault(require("../components/ClientSidebar"));
const authService_1 = require("../services/authService");
const clientDashboardService_1 = require("../services/clientDashboardService");
const clientRenderQueueService_1 = require("../services/clientRenderQueueService");
require("../styles/Dashboard.css");
require("../styles/ClientRenderQueue.css");
const FILTERS = [
    {
        key: 'ALL',
        label: 'All'
    },
    {
        key: 'QUEUED',
        label: 'Queued'
    },
    {
        key: 'RENDERING',
        label: 'Rendering'
    },
    {
        key: 'COMPLETED',
        label: 'Completed'
    },
    {
        key: 'FAILED',
        label: 'Failed'
    }
];
const STATUS_CONFIG = {
    QUEUED: {
        label: 'Queued',
        className: 'render-status-queued'
    },
    RENDERING: {
        label: 'Rendering',
        className: 'render-status-rendering'
    },
    COMPLETED: {
        label: 'Completed',
        className: 'render-status-completed'
    },
    FAILED: {
        label: 'Failed',
        className: 'render-status-failed'
    }
};
const PRIORITY_CONFIG = {
    LOW: {
        label: 'Low',
        className: 'render-priority-low'
    },
    NORMAL: {
        label: 'Normal',
        className: 'render-priority-normal'
    },
    HIGH: {
        label: 'High',
        className: 'render-priority-high'
    }
};
function formatDate(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
function formatJobId(renderJobId) {
    if (renderJobId === null ||
        renderJobId === undefined) {
        return 'R-—';
    }
    return (`R-${String(renderJobId).padStart(3, '0')}`);
}
function SummaryIcon({ status }) {
    if (status ===
        'COMPLETED') {
        return (h(lucide_react_1.CheckCircle2, { size: 22 }));
    }
    if (status ===
        'FAILED') {
        return (h(lucide_react_1.CircleX, { size: 22 }));
    }
    if (status ===
        'RENDERING') {
        return (h(lucide_react_1.RefreshCw, { size: 22 }));
    }
    if (status ===
        'QUEUED') {
        return (h(lucide_react_1.Clock3, { size: 22 }));
    }
    return (h(lucide_react_1.ListChecks, { size: 22 }));
}
function ClientRenderQueuePage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [jobs, setJobs] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [activeFilter, setActiveFilter] = (0, react_1.useState)('ALL');
    const [searchTerm, setSearchTerm] = (0, react_1.useState)('');
    const [unreadCount, setUnreadCount] = (0, react_1.useState)(0);
    const email = (0, authService_1.getStoredEmail)() || '';
    const fallbackName = (0, authService_1.getStoredDisplayName)('Client');
    (0, react_1.useEffect)(() => {
        async function loadPage() {
            try {
                setLoading(true);
                setError('');
                const [renderJobs, unread] = await Promise.all([
                    (0, clientRenderQueueService_1.loadClientRenderQueue)(),
                    (0, clientDashboardService_1.getUnreadNotificationCount)()
                ]);
                setJobs(renderJobs);
                setUnreadCount(unread);
            }
            catch (err) {
                setError(err.message ||
                    'Unable to load render queue.');
                if (err.message ===
                    'Your session has expired. Please log in again.') {
                    navigate('/login', {
                        replace: true
                    });
                }
            }
            finally {
                setLoading(false);
            }
        }
        loadPage();
    }, [navigate]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const counts = (0, react_1.useMemo)(() => ({
        ALL: jobs.length,
        QUEUED: jobs.filter(job => job.status ===
            'QUEUED').length,
        RENDERING: jobs.filter(job => job.status ===
            'RENDERING').length,
        COMPLETED: jobs.filter(job => job.status ===
            'COMPLETED').length,
        FAILED: jobs.filter(job => job.status ===
            'FAILED').length
    }), [jobs]);
    const visibleJobs = (0, react_1.useMemo)(() => {
        const search = searchTerm
            .trim()
            .toLowerCase();
        return jobs.filter(job => {
            const matchesStatus = activeFilter ===
                'ALL' ||
                job.status ===
                    activeFilter;
            if (!matchesStatus) {
                return false;
            }
            if (!search) {
                return true;
            }
            const searchable = [
                formatJobId(job.renderJobId),
                job.projectName,
                job.assetName,
                job.versionNumber,
                job.submittedByName,
                job.priority,
                job.status
            ]
                .filter(Boolean)
                .join(' ')
                .toLowerCase();
            return searchable.includes(search);
        });
    }, [
        jobs,
        activeFilter,
        searchTerm
    ]);
    const summaryCards = [
        {
            label: 'Total Jobs',
            value: counts.ALL,
            status: 'ALL'
        },
        {
            label: 'Queued',
            value: counts.QUEUED,
            status: 'QUEUED'
        },
        {
            label: 'Rendering',
            value: counts.RENDERING,
            status: 'RENDERING'
        },
        {
            label: 'Completed',
            value: counts.COMPLETED,
            status: 'COMPLETED'
        },
        {
            label: 'Failed',
            value: counts.FAILED,
            status: 'FAILED'
        }
    ];
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    return (h("div", { className: "dashboard-page" },
        h(ClientSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("button", { type: "button", className: "topbar-icon-button notification-button", "aria-label": "Notifications", onClick: () => navigate('/client/dashboard') },
                        h(lucide_react_1.Bell, { size: 27 }),
                        unreadCount > 0 &&
                            (h("span", { className: "notification-dot" }, unreadCount > 9
                                ? '9+'
                                : unreadCount))),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, fallbackName),
                                    h("span", null, email)),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "render-queue-main" },
                h("div", { className: "render-queue-heading" },
                    h("p", { className: "render-queue-eyebrow" }, "Production"),
                    h("h1", null, "Render Queue"),
                    h("span", null, "Monitor rendering progress for approved design versions in your projects.")),
                error &&
                    (h("div", { className: "dashboard-error" }, error)),
                h("section", { className: "render-summary-grid" }, summaryCards.map(card => (h("article", { className: "render-summary-card", key: card.label },
                    h("div", { className: "render-summary-icon" },
                        h(SummaryIcon, { status: card.status })),
                    h("div", { className: "render-summary-content" },
                        h("span", null, card.label),
                        h("strong", null, loading
                            ? '—'
                            : card.value)))))),
                h("div", { className: "render-queue-controls" },
                    h("div", { className: "render-queue-search" },
                        h(lucide_react_1.Search, { size: 19 }),
                        h("input", { type: "text", placeholder: "Search render jobs...", value: searchTerm, onChange: event => setSearchTerm(event.target.value), "aria-label": "Search render jobs" }),
                        searchTerm &&
                            (h("button", { type: "button", onClick: () => setSearchTerm(''), "aria-label": "Clear search" }, "\u00D7"))),
                    h("div", { className: "render-status-filters" }, FILTERS.map(filter => (h("button", { type: "button", key: filter.key, className: activeFilter ===
                            filter.key
                            ? 'render-status-filter render-status-filter-active'
                            : 'render-status-filter', onClick: () => setActiveFilter(filter.key) },
                        filter.label,
                        h("span", null, counts[filter.key])))))),
                h("section", { className: "render-queue-table-card" },
                    h("div", { className: "render-queue-table-header" },
                        h("span", null, "Job ID"),
                        h("span", null, "Project"),
                        h("span", null, "Approved Version"),
                        h("span", null, "Submitted By"),
                        h("span", null, "Priority"),
                        h("span", null, "Status"),
                        h("span", null, "Date Submitted"),
                        h("span", null, "Completion Date"),
                        h("span", null)),
                    loading
                        ? (h("div", { className: "render-queue-state" }, "Loading render jobs..."))
                        : visibleJobs.length ===
                            0
                            ? (h("div", { className: "render-queue-state" },
                                h(lucide_react_1.ListChecks, { size: 38 }),
                                h("strong", null, "No render jobs found"),
                                h("span", null, "Render jobs associated with your projects will appear here.")))
                            : (visibleJobs.map(job => {
                                const status = STATUS_CONFIG[job.status] ||
                                    STATUS_CONFIG.QUEUED;
                                const priority = PRIORITY_CONFIG[job.priority] ||
                                    PRIORITY_CONFIG.NORMAL;
                                return (h("article", { className: "render-queue-row", key: job.renderJobId },
                                    h("div", { className: "render-job-id-cell" }, formatJobId(job.renderJobId)),
                                    h("div", { className: "render-project-cell" },
                                        h("strong", null, job.projectName),
                                        h("span", null, job.assetName)),
                                    h("div", { className: "render-version-cell" }, job.versionNumber
                                        ? `v${job.versionNumber}`
                                        : '—'),
                                    h("div", { className: "render-submitter-cell" },
                                        h(lucide_react_1.UserRound, { size: 22 }),
                                        h("span", null, job.submittedByName)),
                                    h("div", null,
                                        h("span", { className: `render-priority ${priority.className}` }, priority.label)),
                                    h("div", null,
                                        h("span", { className: `render-job-status ${status.className}` },
                                            h("span", { className: "render-job-status-dot" }),
                                            status.label)),
                                    h("div", null, formatDate(job.submittedAt)),
                                    h("div", null, formatDate(job.completedAt)),
                                    h("div", { className: "render-view-cell" },
                                        h("button", { type: "button", className: "render-view-project-button", onClick: () => navigate(`/client/projects/${job.projectId}`) },
                                            "View project",
                                            h(lucide_react_1.ChevronRight, { size: 15 })))));
                            })))))));
}
exports.default = ClientRenderQueuePage;

});
__register("src/pages/ClientVersionHistoryPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ClientSidebar_1 = __importDefault(require("../components/ClientSidebar"));
const authService_1 = require("../services/authService");
const clientDashboardService_1 = require("../services/clientDashboardService");
const clientVersionHistoryService_1 = require("../services/clientVersionHistoryService");
require("../styles/Dashboard.css");
require("../styles/ClientVersionHistory.css");
const VERSION_STATUS = {
    DRAFT: {
        label: 'Draft',
        className: 'history-status-draft'
    },
    FOR_REVIEW: {
        label: 'For review',
        className: 'history-status-review'
    },
    REVISION_REQUESTED: {
        label: 'Revision requested',
        className: 'history-status-revision'
    },
    APPROVED: {
        label: 'Approved',
        className: 'history-status-approved'
    },
    RENDER_READY: {
        label: 'Render ready',
        className: 'history-status-ready'
    }
};
function formatDate(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
function getUserName(user) {
    if (!user) {
        return 'Unknown';
    }
    const firstName = user.firstName?.trim() || '';
    const lastName = user.lastName?.trim() || '';
    const fullName = `${firstName} ${lastName}`
        .trim();
    return (fullName ||
        user.email ||
        'Unknown');
}
async function getResponseMessage(response, fallback) {
    try {
        const data = await response.json();
        return (data?.message ||
            fallback);
    }
    catch {
        return fallback;
    }
}
function ClientVersionHistoryPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [groups, setGroups] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [searchTerm, setSearchTerm] = (0, react_1.useState)('');
    const [selectedProject, setSelectedProject] = (0, react_1.useState)('ALL');
    const [unreadCount, setUnreadCount] = (0, react_1.useState)(0);
    const [downloadingVersionId, setDownloadingVersionId] = (0, react_1.useState)(null);
    const [unavailableVersionIds, setUnavailableVersionIds] = (0, react_1.useState)(() => new Set());
    const email = (0, authService_1.getStoredEmail)() || '';
    const fallbackName = (0, authService_1.getStoredDisplayName)('Client');
    (0, react_1.useEffect)(() => {
        async function loadPage() {
            try {
                setLoading(true);
                setError('');
                const [historyGroups, unread] = await Promise.all([
                    (0, clientVersionHistoryService_1.loadClientVersionHistory)(),
                    (0, clientDashboardService_1.getUnreadNotificationCount)()
                ]);
                setGroups(historyGroups);
                setUnreadCount(unread);
            }
            catch (err) {
                setError(err.message ||
                    'Unable to load version history.');
                if (err.message ===
                    'Your session has expired. Please log in again.') {
                    navigate('/login', {
                        replace: true
                    });
                }
            }
            finally {
                setLoading(false);
            }
        }
        loadPage();
    }, [navigate]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const projectFilters = (0, react_1.useMemo)(() => {
        const map = new Map();
        for (const group of groups) {
            const versionCount = group.versions.length;
            map.set(group.projectId, {
                projectId: group.projectId,
                projectName: group.projectName,
                count: (map.get(group.projectId)?.count || 0) +
                    versionCount
            });
        }
        const totalVersions = groups.reduce((total, group) => total +
            group.versions.length, 0);
        return [
            {
                key: 'ALL',
                label: 'All',
                count: totalVersions
            },
            ...Array.from(map.values()).map(project => ({
                key: String(project.projectId),
                label: project.projectName,
                count: project.count
            }))
        ];
    }, [groups]);
    const visibleGroups = (0, react_1.useMemo)(() => {
        const search = searchTerm
            .trim()
            .toLowerCase();
        return groups
            .filter(group => selectedProject ===
            'ALL' ||
            String(group.projectId) ===
                selectedProject)
            .map(group => {
            if (!search) {
                return group;
            }
            const filteredVersions = group.versions.filter(version => {
                const searchable = [
                    group.assetName,
                    group.projectName,
                    version.versionNumber,
                    version.status,
                    version.changeNotes,
                    getUserName(version.uploadedBy)
                ]
                    .filter(Boolean)
                    .join(' ')
                    .toLowerCase();
                return searchable
                    .includes(search);
            });
            if (!filteredVersions.length) {
                return null;
            }
            return {
                ...group,
                versions: filteredVersions
            };
        })
            .filter(Boolean);
    }, [
        groups,
        selectedProject,
        searchTerm
    ]);
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    async function handleDownload(version) {
        if (!version?.versionId) {
            return;
        }
        try {
            setError('');
            setDownloadingVersionId(version.versionId);
            const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/${version.versionId}/download`);
            if (!response.ok) {
                const message = await getResponseMessage(response, 'Unable to download this version.');
                if (message ===
                    'Stored file does not exist') {
                    setUnavailableVersionIds(previous => {
                        const next = new Set(previous);
                        next.add(version.versionId);
                        return next;
                    });
                    return;
                }
                throw new Error(message);
            }
            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href =
                objectUrl;
            const disposition = response.headers.get('content-disposition');
            const filename = disposition
                ?.match(/filename="?([^"]+)"?/)?.[1];
            anchor.download =
                filename ||
                    `interiorsync-version-${version.versionNumber}`;
            document.body.appendChild(anchor);
            anchor.click();
            anchor.remove();
            URL.revokeObjectURL(objectUrl);
        }
        catch (err) {
            if (err.message ===
                'Your session has expired. Please log in again.') {
                navigate('/login', {
                    replace: true
                });
                return;
            }
            setError(err.message ||
                'Unable to download this version.');
        }
        finally {
            setDownloadingVersionId(null);
        }
    }
    return (h("div", { className: "dashboard-page" },
        h(ClientSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("button", { type: "button", className: "topbar-icon-button notification-button", "aria-label": "Notifications", onClick: () => navigate('/client/dashboard') },
                        h(lucide_react_1.Bell, { size: 27 }),
                        unreadCount > 0 &&
                            (h("span", { className: "notification-dot" }, unreadCount > 9
                                ? '9+'
                                : unreadCount))),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, fallbackName),
                                    h("span", null, email)),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "version-history-main" },
                h("div", { className: "version-history-heading" },
                    h("p", { className: "version-history-eyebrow" }, "Library"),
                    h("h1", null, "Version History"),
                    h("span", null, "Review previous and current versions of design assets in your projects.")),
                error &&
                    (h("div", { className: "dashboard-error" }, error)),
                h("div", { className: "version-history-controls" },
                    h("div", { className: "version-history-search" },
                        h(lucide_react_1.Search, { size: 19 }),
                        h("input", { type: "text", value: searchTerm, onChange: event => setSearchTerm(event.target.value), placeholder: "Search versions...", "aria-label": "Search versions" }),
                        searchTerm &&
                            (h("button", { type: "button", onClick: () => setSearchTerm('') }, "\u00D7"))),
                    h("div", { className: "version-project-filters" }, projectFilters.map(filter => (h("button", { type: "button", key: filter.key, className: selectedProject ===
                            filter.key
                            ? 'version-project-filter version-project-filter-active'
                            : 'version-project-filter', onClick: () => setSelectedProject(filter.key) },
                        filter.label,
                        h("span", null, filter.count)))))),
                loading
                    ? (h("section", { className: "version-history-state" }, "Loading version history..."))
                    : visibleGroups.length ===
                        0
                        ? (h("section", { className: "version-history-state" },
                            h(lucide_react_1.History, { size: 38 }),
                            h("strong", null, "No versions found"),
                            h("span", null, "Try another project or search term.")))
                        : (h("div", { className: "version-history-groups" }, visibleGroups.map(group => (h("section", { className: "version-history-card", key: group.assetId },
                            h("div", { className: "version-history-card-title" },
                                h("div", null,
                                    h("h2", null, group.assetName),
                                    h("p", null,
                                        h(lucide_react_1.FolderOpen, { size: 14 }),
                                        group.projectName)),
                                h("span", null,
                                    group.versions
                                        .length,
                                    group.versions
                                        .length === 1
                                        ? ' version'
                                        : ' versions')),
                            h("div", { className: "version-history-table" },
                                h("div", { className: "version-history-table-header" },
                                    h("span", null, "Version"),
                                    h("span", null, "Uploaded By"),
                                    h("span", null, "Upload Date"),
                                    h("span", null, "Revision Note"),
                                    h("span", null, "Status"),
                                    h("span", null)),
                                group.versions.map(version => {
                                    const isCurrent = version.versionId ===
                                        group.currentVersionId;
                                    const status = VERSION_STATUS[version.status] || {
                                        label: version.status ||
                                            'Unknown',
                                        className: 'history-status-draft'
                                    };
                                    const unavailable = unavailableVersionIds.has(version.versionId);
                                    const downloading = downloadingVersionId ===
                                        version.versionId;
                                    return (h("article", { className: isCurrent
                                            ? 'version-history-row version-history-row-current'
                                            : 'version-history-row', key: version.versionId },
                                        h("div", { className: "history-version-cell" },
                                            h("strong", null,
                                                "v",
                                                version.versionNumber),
                                            isCurrent &&
                                                (h("span", { className: "history-current-badge" }, "Current"))),
                                        h("div", { className: "history-uploader-cell" },
                                            h(lucide_react_1.UserRound, { size: 24 }),
                                            h("span", null, getUserName(version.uploadedBy))),
                                        h("div", null, formatDate(version.uploadedAt)),
                                        h("div", { className: "history-note-cell" },
                                            h("span", null, version.changeNotes ||
                                                'No revision note.'),
                                            unavailable &&
                                                (h("small", null, "Stored file unavailable"))),
                                        h("div", null,
                                            h("span", { className: `history-status ${status.className}` },
                                                h("span", null),
                                                status.label)),
                                        h("div", { className: "history-action-cell" },
                                            h("button", { type: "button", className: "history-download-button", disabled: unavailable ||
                                                    downloading, onClick: () => handleDownload(version) },
                                                h(lucide_react_1.Download, { size: 15 }),
                                                downloading
                                                    ? 'Downloading...'
                                                    : 'Download'))));
                                })))))))))));
}
exports.default = ClientVersionHistoryPage;

});
__register("src/pages/DesignerAssetLibraryPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const DesignerSidebar_1 = __importDefault(require("../components/DesignerSidebar"));
const authService_1 = require("../services/authService");
const designerAssetLibraryService_1 = require("../services/designerAssetLibraryService");
require("../styles/Dashboard.css");
require("../styles/DesignerAssetLibrary.css");
function formatDate(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
function formatStatus(value) {
    if (!value) {
        return 'Draft';
    }
    return value
        .toLowerCase()
        .split('_')
        .map(word => word.charAt(0)
        .toUpperCase() +
        word.slice(1))
        .join(' ');
}
function DesignerAssetLibraryPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [assets, setAssets] = (0, react_1.useState)([]);
    const [projects, setProjects] = (0, react_1.useState)([]);
    const [categories, setCategories] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [search, setSearch] = (0, react_1.useState)('');
    const [projectFilter, setProjectFilter] = (0, react_1.useState)('ALL');
    const [categoryFilter, setCategoryFilter] = (0, react_1.useState)('ALL');
    const email = (0, authService_1.getStoredEmail)() || '';
    const designerName = (0, authService_1.getStoredDisplayName)('Designer');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        async function loadPage() {
            try {
                const data = await (0, designerAssetLibraryService_1.loadDesignerAssetLibrary)();
                if (cancelled) {
                    return;
                }
                setAssets(data.assets);
                setProjects(data.projects);
                setCategories(data.categories);
                setError('');
            }
            catch (err) {
                if (cancelled) {
                    return;
                }
                setError(err.message ||
                    'Unable to load Asset Library.');
            }
            finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadPage();
        return () => {
            cancelled =
                true;
        };
    }, []);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const normalizedSearch = search
        .trim()
        .toLowerCase();
    const visibleAssets = assets.filter(asset => {
        const matchesProject = projectFilter ===
            'ALL' ||
            String(asset.projectId) ===
                projectFilter;
        const matchesCategory = categoryFilter ===
            'ALL' ||
            asset.category ===
                categoryFilter;
        const searchText = [
            asset.assetName,
            asset.assetType,
            asset.category,
            asset.projectName,
            asset.uploadedBy
        ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
        const matchesSearch = !normalizedSearch ||
            searchText.includes(normalizedSearch);
        return (matchesProject &&
            matchesCategory &&
            matchesSearch);
    });
    const activeAssets = assets.filter(asset => asset.projectStatus !==
        'DELIVERED').length;
    const deliveredAssets = assets.filter(asset => asset.projectStatus ===
        'DELIVERED').length;
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    return (h("div", { className: "dashboard-page" },
        h(DesignerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Open profile menu" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, designerName),
                                    h("span", null, email),
                                    h("small", null, "Interior Designer")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "designer-library-main" },
                h("div", { className: "designer-library-heading" },
                    h("div", null,
                        h("p", null, "Library"),
                        h("h1", null, "Asset Library"),
                        h("span", null, "Browse and manage project-based 3D models and related design assets.")),
                    h("button", { type: "button", className: "designer-library-upload-button", onClick: () => navigate('/designer/assets/upload') },
                        h(lucide_react_1.Plus, { size: 17 }),
                        "Upload Asset")),
                error &&
                    (h("div", { className: "designer-library-error" }, error)),
                h("section", { className: "designer-library-stats" },
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Boxes, { size: 20 })),
                        h("span", null, "Total Assets"),
                        h("strong", null, assets.length)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Folder, { size: 20 })),
                        h("span", null, "Projects"),
                        h("strong", null, projects.length)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Layers3, { size: 20 })),
                        h("span", null, "Categories"),
                        h("strong", null, categories.length)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Box, { size: 20 })),
                        h("span", null, "Active Project Assets"),
                        h("strong", null, activeAssets)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.FileClock, { size: 20 })),
                        h("span", null, "Delivered Assets"),
                        h("strong", null, deliveredAssets))),
                h("section", { className: "designer-library-card" },
                    h("div", { className: "designer-library-toolbar" },
                        h("div", { className: "designer-library-search" },
                            h(lucide_react_1.Search, { size: 17 }),
                            h("input", { type: "text", value: search, placeholder: "Search assets...", onChange: event => setSearch(event.target.value) })),
                        h("select", { value: projectFilter, onChange: event => setProjectFilter(event.target.value) },
                            h("option", { value: "ALL" }, "All Projects"),
                            projects.map(project => (h("option", { key: project.projectId, value: project.projectId }, project.projectName)))),
                        h("select", { value: categoryFilter, onChange: event => setCategoryFilter(event.target.value) },
                            h("option", { value: "ALL" }, "All Categories"),
                            categories.map(category => (h("option", { key: category, value: category }, category))))),
                    loading
                        ? (h("div", { className: "designer-library-empty" }, "Loading Asset Library..."))
                        : visibleAssets.length ===
                            0
                            ? (h("div", { className: "designer-library-empty" },
                                h(lucide_react_1.Boxes, { size: 31 }),
                                h("strong", null, "No assets found"),
                                h("span", null, "Upload an asset or change the selected search and filters.")))
                            : (h("div", { className: "designer-library-grid" }, visibleAssets.map(asset => (h("article", { className: "designer-library-asset-card", key: asset.assetId },
                                h("div", { className: "designer-library-preview" },
                                    h(lucide_react_1.Box, { size: 42 }),
                                    h("span", null, asset.assetType)),
                                h("div", { className: "designer-library-asset-content" },
                                    h("div", { className: "designer-library-asset-top" },
                                        h("div", null,
                                            h("h2", null, asset.assetName),
                                            h("p", null, asset.projectName)),
                                        h("span", { className: "designer-library-version-badge" }, asset.currentVersionNumber
                                            ? `v${asset.currentVersionNumber}`
                                            : 'No version')),
                                    h("div", { className: "designer-library-asset-meta" },
                                        h("div", null,
                                            h("span", null, "Category"),
                                            h("strong", null, asset.category)),
                                        h("div", null,
                                            h("span", null, "Status"),
                                            h("strong", null, formatStatus(asset.currentVersionStatus)))),
                                    h("div", { className: "designer-library-upload-meta" },
                                        h("span", null,
                                            "Uploaded by ",
                                            asset.uploadedBy),
                                        h("span", null, formatDate(asset.uploadedAt))),
                                    h("div", { className: "designer-library-card-actions" },
                                        h("button", { type: "button", onClick: () => navigate(`/designer/projects/${asset.projectId}`) }, "View Project"),
                                        h("button", { type: "button", className: "designer-library-primary-action", onClick: () => navigate(`/designer/versions?projectId=${asset.projectId}&assetId=${asset.assetId}`) }, "View Versions")))))))),
                    h("div", { className: "designer-library-footer" },
                        "Showing ",
                        visibleAssets.length,
                        " of ",
                        assets.length,
                        " assets"))))));
}
exports.default = DesignerAssetLibraryPage;

});
__register("src/pages/DesignerDashboard.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const DesignerSidebar_1 = __importDefault(require("../components/DesignerSidebar"));
const authService_1 = require("../services/authService");
const designerDashboardService_1 = require("../services/designerDashboardService");
require("../styles/Dashboard.css");
require("../styles/DesignerDashboard.css");
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function formatProjectStatus(status) {
    if (!status) {
        return 'Unknown';
    }
    return status
        .replaceAll('_', ' ')
        .toLowerCase()
        .replace(/\b\w/g, character => character.toUpperCase());
}
function getUserDisplayName(user) {
    if (!user) {
        return '';
    }
    const firstName = user.firstName?.trim() || '';
    const lastName = user.lastName?.trim() || '';
    const fullName = `${firstName} ${lastName}`.trim();
    return (fullName ||
        user.email ||
        '');
}
function getMemberUser(member) {
    return (member?.user ||
        member?.member ||
        null);
}
function DesignerDashboard() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [dashboardData, setDashboardData] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [resolvedDesignerName, setResolvedDesignerName] = (0, react_1.useState)('');
    const email = (0, authService_1.getStoredEmail)() || '';
    /*
      Fallback name only.
  
      This is used if the Designer does not yet have
      an assigned project or if a project member
      record cannot be resolved.
    */
    const fallbackDesignerName = (0, authService_1.getStoredDisplayName)('Designer');
    const designerName = resolvedDesignerName ||
        fallbackDesignerName ||
        'Designer';
    /*
      Initial dashboard load.
    */
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        (0, designerDashboardService_1.loadDesignerDashboard)()
            .then(data => {
            if (cancelled) {
                return;
            }
            setDashboardData(data);
            setError('');
        })
            .catch(err => {
            if (cancelled) {
                return;
            }
            if (err.message ===
                'Your session has expired. Please log in again.') {
                navigate('/login', {
                    replace: true
                });
                return;
            }
            setError(err.message ||
                'Unable to load designer dashboard.');
        })
            .finally(() => {
            if (cancelled) {
                return;
            }
            setLoading(false);
        });
        return () => {
            cancelled = true;
        };
    }, [navigate]);
    /*
      Resolve the real Designer name.
  
      The dashboard already contains projects that
      belong to the currently authenticated Designer.
  
      We use one of those project IDs to retrieve
      its project members, then match the logged-in
      email address against the assigned member.
  
      Example:
      designer3@interiorsync.test
          ->
      Second Designer
    */
    (0, react_1.useEffect)(() => {
        const projects = dashboardData?.projects || [];
        if (!email ||
            projects.length === 0) {
            return undefined;
        }
        let cancelled = false;
        async function resolveDesignerName() {
            for (const project of projects) {
                if (cancelled ||
                    !project?.projectId) {
                    continue;
                }
                try {
                    const response = await (0, authService_1.authenticatedFetch)(`/api/project-members/project/${project.projectId}`);
                    if (!response.ok) {
                        continue;
                    }
                    const data = await response.json();
                    const members = Array.isArray(data)
                        ? data
                        : [];
                    const matchingMember = members.find(member => {
                        const user = getMemberUser(member);
                        return (user
                            ?.email
                            ?.trim()
                            ?.toLowerCase() ===
                            email
                                .trim()
                                .toLowerCase());
                    });
                    const matchedUser = getMemberUser(matchingMember);
                    const fullName = getUserDisplayName(matchedUser);
                    if (fullName &&
                        !cancelled) {
                        setResolvedDesignerName(fullName);
                        return;
                    }
                }
                catch {
                    /*
                      Continue checking another assigned
                      project if one request fails.
                    */
                }
            }
        }
        resolveDesignerName();
        return () => {
            cancelled = true;
        };
    }, [
        dashboardData?.projects,
        email
    ]);
    /*
      Close profile dropdown when clicking
      outside of the profile area.
    */
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    const counts = dashboardData?.counts || {
        assignedProjects: 0,
        revisionRequests: 0,
        renderReady: 0,
        queuedJobs: 0,
        renderingJobs: 0,
        completedRenders: 0,
        failedRenders: 0
    };
    const stats = [
        {
            label: 'Assigned Projects',
            value: counts.assignedProjects,
            icon: lucide_react_1.Folder
        },
        {
            label: 'Revision Requests',
            value: counts.revisionRequests,
            icon: lucide_react_1.RefreshCw
        },
        {
            label: 'Render Ready',
            value: counts.renderReady,
            icon: lucide_react_1.Layers3
        },
        {
            label: 'Queued Jobs',
            value: counts.queuedJobs,
            icon: lucide_react_1.Clock3
        },
        {
            label: 'Rendering',
            value: counts.renderingJobs,
            icon: lucide_react_1.ListChecks
        },
        {
            label: 'Completed Renders',
            value: counts.completedRenders,
            icon: lucide_react_1.CheckCircle2
        },
        {
            label: 'Failed Renders',
            value: counts.failedRenders,
            icon: lucide_react_1.CircleX
        }
    ];
    return (h("div", { className: "dashboard-page" },
        h(DesignerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("button", { type: "button", className: "topbar-icon-button notification-button", "aria-label": "Notifications", onClick: () => navigate('/designer/notifications') },
                        h(lucide_react_1.Bell, { size: 27 }),
                        dashboardData
                            ?.unreadCount > 0 &&
                            (h("span", { className: "notification-dot" }, dashboardData
                                .unreadCount > 9
                                ? '9+'
                                : dashboardData
                                    .unreadCount))),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, designerName),
                                    h("span", null, email),
                                    h("small", null, "Interior Designer")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "designer-dashboard-main" },
                error &&
                    (h("div", { className: "dashboard-error" }, error)),
                h("section", { className: "designer-welcome-banner" },
                    h("div", { className: "designer-welcome-overlay" }),
                    h("div", { className: "designer-welcome-content" },
                        h("p", null, "Interior Designer Workspace"),
                        h("h1", null,
                            "Welcome, ",
                            designerName),
                        h("span", null, "Manage assigned projects, revisions, approved designs, and render jobs."))),
                h("section", { className: "designer-stats-grid" }, stats.map(stat => {
                    const Icon = stat.icon;
                    return (h("article", { className: "designer-stat-card", key: stat.label },
                        h("div", { className: "designer-stat-icon" },
                            h(Icon, { size: 21 })),
                        h("div", null,
                            h("span", null, stat.label),
                            h("strong", null, loading
                                ? '—'
                                : stat.value))));
                })),
                h("section", { className: "designer-dashboard-grid" },
                    h("article", { className: "designer-dashboard-panel" },
                        h("div", { className: "designer-panel-header" },
                            h("div", null,
                                h("h2", null, "Assigned Projects"),
                                h("span", null, "Projects currently available in your workspace.")),
                            h(lucide_react_1.Folder, { size: 20 })),
                        h("div", { className: "designer-project-list" }, loading
                            ? (h("div", { className: "designer-panel-state" }, "Loading projects..."))
                            : dashboardData
                                ?.projects
                                ?.length
                                ? (dashboardData.projects
                                    .slice(0, 5)
                                    .map(project => (h("div", { className: "designer-project-row", key: project.projectId },
                                    h("div", { className: "designer-project-icon" },
                                        h(lucide_react_1.Folder, { size: 18 })),
                                    h("div", { className: "designer-project-info" },
                                        h("strong", null, project.projectName),
                                        h("span", null,
                                            project
                                                ?.client
                                                ?.user
                                                ?.firstName ||
                                                'Client',
                                            ' ',
                                            project
                                                ?.client
                                                ?.user
                                                ?.lastName ||
                                                '')),
                                    h("span", { className: project.status ===
                                            'DELIVERED'
                                            ? 'designer-project-status designer-project-status-delivered'
                                            : 'designer-project-status' }, formatProjectStatus(project.status))))))
                                : (h("div", { className: "designer-panel-state" },
                                    h(lucide_react_1.Folder, { size: 27 }),
                                    h("span", null, "No assigned projects."))))),
                    h("article", { className: "designer-dashboard-panel" },
                        h("div", { className: "designer-panel-header" },
                            h("div", null,
                                h("h2", null, "Recent Activity"),
                                h("span", null, "Latest project and production activity.")),
                            h(lucide_react_1.ListChecks, { size: 20 })),
                        h("div", { className: "designer-activity-list" }, loading
                            ? (h("div", { className: "designer-panel-state" }, "Loading activity..."))
                            : dashboardData
                                ?.recentActivity
                                ?.length
                                ? (dashboardData
                                    .recentActivity
                                    .map(activity => (h("div", { className: "designer-activity-row", key: activity.id },
                                    h("div", { className: "designer-activity-icon" }, activity.status ===
                                        'FAILED'
                                        ? (h(lucide_react_1.CircleAlert, { size: 18 }))
                                        : (h(lucide_react_1.ListChecks, { size: 18 }))),
                                    h("div", { className: "designer-activity-info" },
                                        h("strong", null, activity.title),
                                        h("span", null, activity.message),
                                        h("small", null, formatDateTime(activity.timestamp)))))))
                                : (h("div", { className: "designer-panel-state" }, "No recent activity.")))),
                    h("article", { className: "designer-dashboard-panel designer-notifications-panel" },
                        h("div", { className: "designer-panel-header" },
                            h("div", null,
                                h("h2", null, "Notifications"),
                                h("span", null, "Important updates requiring your attention.")),
                            h(lucide_react_1.Bell, { size: 20 })),
                        h("div", { className: "designer-notification-list" }, loading
                            ? (h("div", { className: "designer-panel-state" }, "Loading notifications..."))
                            : dashboardData
                                ?.notifications
                                ?.length
                                ? (dashboardData
                                    .notifications
                                    .map(notification => (h("div", { className: notification.isRead
                                        ? 'designer-notification-row'
                                        : 'designer-notification-row designer-notification-unread', key: notification.notificationId },
                                    h("div", { className: "designer-notification-dot" }),
                                    h("div", { className: "designer-notification-info" },
                                        h("strong", null, notification.title),
                                        h("span", null, notification.message),
                                        h("small", null, formatDateTime(notification.createdAt)))))))
                                : (h("div", { className: "designer-panel-state" },
                                    h(lucide_react_1.Bell, { size: 27 }),
                                    h("span", null, "No notifications."))))))))));
}
exports.default = DesignerDashboard;

});
__register("src/pages/DesignerFeedbackPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const DesignerSidebar_1 = __importDefault(require("../components/DesignerSidebar"));
const authService_1 = require("../services/authService");
const designerFeedbackService_1 = require("../services/designerFeedbackService");
require("../styles/Dashboard.css");
require("../styles/DesignerFeedback.css");
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function formatStatus(value) {
    if (!value) {
        return 'Unknown';
    }
    return value
        .toLowerCase()
        .split('_')
        .map(word => word.charAt(0)
        .toUpperCase() +
        word.slice(1))
        .join(' ');
}
function getStatusClass(status) {
    if (status ===
        'REVISION_REQUESTED') {
        return 'designer-feedback-status-revision';
    }
    if (status ===
        'RENDER_READY') {
        return 'designer-feedback-status-approved';
    }
    if (status ===
        'FOR_REVIEW') {
        return 'designer-feedback-status-review';
    }
    return 'designer-feedback-status-default';
}
function DesignerFeedbackPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [feedbackItems, setFeedbackItems] = (0, react_1.useState)([]);
    const [projects, setProjects] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [search, setSearch] = (0, react_1.useState)('');
    const [projectFilter, setProjectFilter] = (0, react_1.useState)('ALL');
    const [statusFilter, setStatusFilter] = (0, react_1.useState)('ALL');
    const [refreshKey, setRefreshKey] = (0, react_1.useState)(0);
    const email = (0, authService_1.getStoredEmail)() || '';
    const designerName = (0, authService_1.getStoredDisplayName)('Designer');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        async function loadPage() {
            try {
                setLoading(true);
                const data = await (0, designerFeedbackService_1.loadDesignerFeedback)();
                if (cancelled) {
                    return;
                }
                setFeedbackItems(data.feedbackItems);
                setProjects(data.projects);
                setError('');
            }
            catch (err) {
                if (cancelled) {
                    return;
                }
                setError(err.message ||
                    'Unable to load Client Feedback.');
            }
            finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadPage();
        return () => {
            cancelled =
                true;
        };
    }, [
        refreshKey
    ]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const totalComments = feedbackItems.reduce((total, item) => total +
        item.comments.length, 0);
    const pendingReviews = feedbackItems.filter(item => item.versionStatus ===
        'FOR_REVIEW').length;
    const revisionRequests = feedbackItems.filter(item => item.versionStatus ===
        'REVISION_REQUESTED').length;
    const approvedDesigns = feedbackItems.filter(item => item.versionStatus ===
        'RENDER_READY').length;
    const normalizedSearch = search
        .trim()
        .toLowerCase();
    const visibleFeedback = feedbackItems.filter(item => {
        const matchesProject = projectFilter ===
            'ALL' ||
            String(item.projectId) ===
                projectFilter;
        const matchesStatus = statusFilter ===
            'ALL' ||
            item.versionStatus ===
                statusFilter;
        const commentText = item.comments
            .map(comment => `${comment.userName} ${comment.text}`)
            .join(' ');
        const searchText = [
            item.projectName,
            item.clientName,
            item.assetName,
            item.changeNotes,
            item.versionStatus,
            commentText
        ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
        const matchesSearch = !normalizedSearch ||
            searchText.includes(normalizedSearch);
        return (matchesProject &&
            matchesStatus &&
            matchesSearch);
    });
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    function handleUploadRevision(item) {
        const params = new URLSearchParams();
        params.set('projectId', item.projectId);
        if (item.assetId) {
            params.set('assetId', item.assetId);
        }
        navigate(`/designer/versions/upload?${params.toString()}`);
    }
    return (h("div", { className: "dashboard-page" },
        h(DesignerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("button", { type: "button", className: "designer-feedback-refresh", onClick: () => setRefreshKey(previous => previous + 1), disabled: loading, "aria-label": "Refresh feedback" },
                        h(lucide_react_1.RefreshCw, { size: 17 })),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Open profile menu" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, designerName),
                                    h("span", null, email),
                                    h("small", null, "Interior Designer")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "designer-feedback-main" },
                h("div", { className: "designer-feedback-heading" },
                    h("div", null,
                        h("p", null, "Production"),
                        h("h1", null, "Client Feedback"),
                        h("span", null, "Review client comments, revision requests, and approved design versions."))),
                error &&
                    (h("div", { className: "designer-feedback-error" }, error)),
                h("section", { className: "designer-feedback-stats" },
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.MessageCircle, { size: 20 })),
                        h("span", null, "Client Comments"),
                        h("strong", null, totalComments)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Clock3, { size: 20 })),
                        h("span", null, "For Review"),
                        h("strong", null, pendingReviews)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.RefreshCw, { size: 20 })),
                        h("span", null, "Revision Requests"),
                        h("strong", null, revisionRequests)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.CheckCircle2, { size: 20 })),
                        h("span", null, "Approved Designs"),
                        h("strong", null, approvedDesigns))),
                h("section", { className: "designer-feedback-card" },
                    h("div", { className: "designer-feedback-toolbar" },
                        h("div", { className: "designer-feedback-search" },
                            h(lucide_react_1.Search, { size: 17 }),
                            h("input", { type: "text", value: search, placeholder: "Search feedback, project, or asset...", onChange: event => setSearch(event.target.value) })),
                        h("select", { value: projectFilter, onChange: event => setProjectFilter(event.target.value) },
                            h("option", { value: "ALL" }, "All Projects"),
                            projects.map(project => (h("option", { key: project.projectId, value: project.projectId }, project.projectName)))),
                        h("select", { value: statusFilter, onChange: event => setStatusFilter(event.target.value) },
                            h("option", { value: "ALL" }, "All Feedback Statuses"),
                            h("option", { value: "FOR_REVIEW" }, "For Review"),
                            h("option", { value: "REVISION_REQUESTED" }, "Revision Requested"),
                            h("option", { value: "RENDER_READY" }, "Approved / Render Ready"))),
                    loading
                        ? (h("div", { className: "designer-feedback-empty" },
                            h(lucide_react_1.RefreshCw, { size: 28 }),
                            h("strong", null, "Loading client feedback...")))
                        : visibleFeedback.length ===
                            0
                            ? (h("div", { className: "designer-feedback-empty" },
                                h(lucide_react_1.MessageCircle, { size: 31 }),
                                h("strong", null, "No client feedback found"),
                                h("span", null, "Client comments and review decisions will appear here after a design version is submitted for review.")))
                            : (h("div", { className: "designer-feedback-list" }, visibleFeedback.map(item => (h("article", { className: "designer-feedback-item", key: item.versionId },
                                h("div", { className: "designer-feedback-item-header" },
                                    h("div", { className: "designer-feedback-version-icon" },
                                        h(lucide_react_1.FileClock, { size: 20 })),
                                    h("div", { className: "designer-feedback-title" },
                                        h("div", null,
                                            h("h2", null, item.assetName),
                                            h("p", null,
                                                item.projectName,
                                                " \u00B7 Version ",
                                                item.versionNumber)),
                                        h("span", { className: `designer-feedback-status ${getStatusClass(item.versionStatus)}` }, formatStatus(item.versionStatus)))),
                                h("div", { className: "designer-feedback-version-info" },
                                    h("div", null,
                                        h("span", null, "Client"),
                                        h("strong", null, item.clientName)),
                                    h("div", null,
                                        h("span", null, "Uploaded"),
                                        h("strong", null, formatDateTime(item.uploadedAt))),
                                    h("div", null,
                                        h("span", null, "Designer Notes"),
                                        h("strong", null, item.changeNotes ||
                                            'No change notes'))),
                                h("div", { className: "designer-feedback-comments" },
                                    h("div", { className: "designer-feedback-comments-heading" },
                                        h("span", null,
                                            h(lucide_react_1.MessageCircle, { size: 15 }),
                                            "Client Comments"),
                                        h("strong", null, item.comments.length)),
                                    item.comments.length ===
                                        0
                                        ? (h("div", { className: "designer-feedback-no-comments" }, "No comments were added to this version."))
                                        : (item.comments.map((comment, index) => (h("div", { className: "designer-feedback-comment", key: comment.commentId ||
                                                `${item.versionId}-${index}` },
                                            h("div", { className: "designer-feedback-comment-avatar" }, comment.userName
                                                .charAt(0)
                                                .toUpperCase()),
                                            h("div", null,
                                                h("div", { className: "designer-feedback-comment-meta" },
                                                    h("strong", null, comment.userName),
                                                    h("span", null, formatDateTime(comment.createdAt))),
                                                h("p", null, comment.text ||
                                                    'No comment text.'))))))),
                                h("div", { className: "designer-feedback-actions" },
                                    h("button", { type: "button", className: "designer-feedback-secondary-button", onClick: () => navigate(`/designer/projects/${item.projectId}`) }, "View Project"),
                                    h("button", { type: "button", className: "designer-feedback-secondary-button", onClick: () => navigate(`/designer/versions?projectId=${item.projectId}&assetId=${item.assetId || ''}`) }, "Version History"),
                                    item.versionStatus ===
                                        'REVISION_REQUESTED' &&
                                        item.projectStatus !==
                                            'DELIVERED' &&
                                        (h("button", { type: "button", className: "designer-feedback-primary-button", onClick: () => handleUploadRevision(item) },
                                            h(lucide_react_1.Send, { size: 15 }),
                                            "Upload Revision")))))))),
                    h("div", { className: "designer-feedback-footer" },
                        "Showing ",
                        visibleFeedback.length,
                        " of ",
                        feedbackItems.length,
                        " review records"))))));
}
exports.default = DesignerFeedbackPage;

});
__register("src/pages/DesignerFinalOutputPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const DesignerSidebar_1 = __importDefault(require("../components/DesignerSidebar"));
const authService_1 = require("../services/authService");
const designerRenderQueueService_1 = require("../services/designerRenderQueueService");
const designerFinalOutputService_1 = require("../services/designerFinalOutputService");
require("../styles/Dashboard.css");
require("../styles/DesignerFinalOutput.css");
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function getUserName(user) {
    if (!user) {
        return 'Unknown';
    }
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`
        .trim();
    return (fullName ||
        user.email ||
        'Unknown');
}
function getOutputUploader(output, renderJob) {
    return (output?.uploadedBy ||
        output?.createdBy ||
        renderJob?.submittedBy ||
        null);
}
function getOutputDate(output) {
    return (output?.uploadedAt ||
        output?.createdAt ||
        null);
}
function DesignerFinalOutputPage() {
    const { renderJobId } = (0, react_router_dom_1.useParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const fileInputRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [renderJob, setRenderJob] = (0, react_1.useState)(null);
    const [output, setOutput] = (0, react_1.useState)(null);
    const [file, setFile] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [uploading, setUploading] = (0, react_1.useState)(false);
    const [viewing, setViewing] = (0, react_1.useState)(false);
    const [downloading, setDownloading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    const [success, setSuccess] = (0, react_1.useState)('');
    const email = (0, authService_1.getStoredEmail)() || '';
    const designerName = (0, authService_1.getStoredDisplayName)('Designer');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        async function loadPage() {
            try {
                setLoading(true);
                const jobs = await (0, designerRenderQueueService_1.loadDesignerRenderJobs)();
                const foundJob = jobs.find(job => String(job.renderJobId) ===
                    String(renderJobId));
                if (!foundJob) {
                    throw new Error('Render job not found or you do not have access to it.');
                }
                if (cancelled) {
                    return;
                }
                setRenderJob(foundJob);
                const existingOutput = await (0, designerFinalOutputService_1.getRenderOutput)(renderJobId);
                if (cancelled) {
                    return;
                }
                setOutput(existingOutput);
            }
            catch (err) {
                if (cancelled) {
                    return;
                }
                setError(err.message ||
                    'Unable to load the final output screen.');
            }
            finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadPage();
        return () => {
            cancelled =
                true;
        };
    }, [
        renderJobId
    ]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    function handleFileChange(event) {
        const selectedFile = event.target.files?.[0] ||
            null;
        if (!selectedFile) {
            setFile(null);
            return;
        }
        const validationError = (0, designerFinalOutputService_1.validateFinalOutputFile)(selectedFile);
        if (validationError) {
            event.target.value =
                '';
            setFile(null);
            setError(validationError);
            return;
        }
        setFile(selectedFile);
        setError('');
        setSuccess('');
    }
    function removeFile() {
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value =
                '';
        }
    }
    async function handleUpload() {
        if (!renderJob) {
            return;
        }
        if (renderJob.status !==
            'COMPLETED') {
            setError('Final output can only be uploaded after the render job is completed.');
            return;
        }
        const validationError = (0, designerFinalOutputService_1.validateFinalOutputFile)(file);
        if (validationError) {
            setError(validationError);
            return;
        }
        try {
            setUploading(true);
            setError('');
            setSuccess('');
            const createdOutput = await (0, designerFinalOutputService_1.uploadFinalOutput)({
                renderJobId: renderJob.renderJobId,
                file
            });
            setOutput(createdOutput);
            setFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value =
                    '';
            }
            setSuccess('Final Output Uploaded Successfully. The Client has been notified.');
        }
        catch (err) {
            setError(err.message ||
                'Unable to upload the final output.');
        }
        finally {
            setUploading(false);
        }
    }
    async function handleView() {
        if (!output) {
            return;
        }
        try {
            setViewing(true);
            setError('');
            await (0, designerFinalOutputService_1.viewFinalOutput)(output.outputId);
        }
        catch (err) {
            setError(err.message ||
                'Unable to view the final output.');
        }
        finally {
            setViewing(false);
        }
    }
    async function handleDownload() {
        if (!output) {
            return;
        }
        try {
            setDownloading(true);
            setError('');
            await (0, designerFinalOutputService_1.downloadFinalOutput)(output);
        }
        catch (err) {
            setError(err.message ||
                'Unable to download the final output.');
        }
        finally {
            setDownloading(false);
        }
    }
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    const project = renderJob?.project;
    const version = renderJob?.version;
    const asset = version?.asset;
    const outputUploader = getOutputUploader(output, renderJob);
    const outputDate = getOutputDate(output);
    const fileName = output?.originalFileName ||
        output?.fileName ||
        'Final Render';
    const extension = fileName
        .split('.')
        .pop()
        ?.toLowerCase();
    const isPdf = extension ===
        'pdf';
    if (loading) {
        return (h("div", { className: "dashboard-page" },
            h(DesignerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
            h("div", { className: "dashboard-content" },
                h("div", { className: "designer-final-loading" }, "Loading Final Output..."))));
    }
    return (h("div", { className: "dashboard-page" },
        h(DesignerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, designerName),
                                    h("span", null, email),
                                    h("small", null, "Interior Designer")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "designer-final-main" },
                h("div", { className: "designer-final-heading" },
                    h("p", null, "Production"),
                    h("h1", null, "Final Output"),
                    h("span", null, "Upload and manage the completed render output for this render job.")),
                error &&
                    (h("div", { className: "designer-final-error" }, error)),
                success &&
                    (h("div", { className: "designer-final-success" },
                        h(lucide_react_1.CheckCircle2, { size: 19 }),
                        success)),
                renderJob &&
                    (h("section", { className: "designer-final-summary" },
                        h("div", null,
                            h("span", null, "Render Job"),
                            h("strong", null,
                                "R-",
                                String(renderJob.renderJobId).padStart(3, '0'))),
                        h("div", null,
                            h("span", null, "Project"),
                            h("strong", null, project?.projectName ||
                                '—')),
                        h("div", null,
                            h("span", null, "Asset"),
                            h("strong", null, asset?.assetName ||
                                '—')),
                        h("div", null,
                            h("span", null, "Approved Version"),
                            h("strong", null,
                                "v",
                                version?.versionNumber ||
                                    '—')),
                        h("div", null,
                            h("span", null, "Render Status"),
                            h("strong", { className: "designer-final-completed" }, renderJob.status)),
                        h("div", null,
                            h("span", null, "Completion Date"),
                            h("strong", null, formatDateTime(renderJob.completedAt))))),
                output
                    ? (h("section", { className: "designer-final-output-card" },
                        h("div", { className: "designer-final-preview" },
                            isPdf
                                ? (h(lucide_react_1.FileText, { size: 60 }))
                                : (h(lucide_react_1.FileImage, { size: 60 })),
                            h("strong", null, "Final Render Available"),
                            h("span", null, fileName),
                            h("div", { className: "designer-final-preview-actions" },
                                h("button", { type: "button", onClick: handleView, disabled: viewing }, viewing
                                    ? 'Opening...'
                                    : 'View'),
                                h("button", { type: "button", onClick: handleDownload, disabled: downloading },
                                    h(lucide_react_1.Download, { size: 15 }),
                                    downloading
                                        ? 'Downloading...'
                                        : 'Download'))),
                        h("div", { className: "designer-final-details" },
                            h("h2", null, "Output Information"),
                            h("div", null,
                                h("span", null, "File Name"),
                                h("strong", null, fileName)),
                            h("div", null,
                                h("span", null, "Project Name"),
                                h("strong", null, project?.projectName ||
                                    '—')),
                            h("div", null,
                                h("span", null, "Approved Version"),
                                h("strong", null,
                                    "v",
                                    version?.versionNumber ||
                                        '—')),
                            h("div", null,
                                h("span", null, "Render Job ID"),
                                h("strong", null,
                                    "R-",
                                    String(renderJob.renderJobId).padStart(3, '0'))),
                            h("div", null,
                                h("span", null, "Uploaded By"),
                                h("strong", null, getUserName(outputUploader))),
                            h("div", null,
                                h("span", null, "Upload Date"),
                                h("strong", null, formatDateTime(outputDate))),
                            h("div", null,
                                h("span", null, "Status"),
                                h("strong", { className: "designer-final-completed" }, "Available")))))
                    : (h("section", { className: "designer-final-upload-card" },
                        h("div", { className: "designer-final-upload-header" },
                            h("div", null,
                                h("h2", null, "Upload Final Output"),
                                h("span", null, "Add the completed rendered image or PDF for this Render Job.")),
                            h(lucide_react_1.UploadCloud, { size: 22 })),
                        h("div", { className: "designer-final-upload-body" },
                            h("input", { ref: fileInputRef, type: "file", accept: ".png,.jpg,.jpeg,.webp,.pdf", hidden: true, onChange: handleFileChange }),
                            file
                                ? (h("div", { className: "designer-final-selected-file" },
                                    h(lucide_react_1.FileImage, { size: 28 }),
                                    h("div", null,
                                        h("strong", null, file.name),
                                        h("span", null,
                                            (file.size /
                                                1024 /
                                                1024).toFixed(2),
                                            " MB")),
                                    h("button", { type: "button", onClick: removeFile },
                                        h(lucide_react_1.X, { size: 18 }))))
                                : (h("button", { type: "button", className: "designer-final-dropzone", onClick: () => fileInputRef
                                        .current
                                        ?.click() },
                                    h(lucide_react_1.UploadCloud, { size: 36 }),
                                    h("strong", null, "Select Final Render File"),
                                    h("span", null, "PNG, JPG, JPEG, WEBP or PDF"),
                                    h("small", null, "Maximum file size: 100 MB"))),
                            h("div", { className: "designer-final-upload-note" }, "Uploading the final output will make it available to the assigned Client and generate a Final Render Available notification.")),
                        h("div", { className: "designer-final-actions" },
                            h("button", { type: "button", className: "designer-final-cancel", onClick: () => navigate('/designer/render-queue'), disabled: uploading }, "Cancel"),
                            h("button", { type: "button", className: "designer-final-upload-button", onClick: handleUpload, disabled: !file ||
                                    uploading ||
                                    renderJob?.status !==
                                        'COMPLETED' },
                                h(lucide_react_1.UploadCloud, { size: 16 }),
                                uploading
                                    ? 'Uploading...'
                                    : 'Upload Final Output'))))))));
}
exports.default = DesignerFinalOutputPage;

});
__register("src/pages/DesignerProjectDetailsPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const DesignerSidebar_1 = __importDefault(require("../components/DesignerSidebar"));
const authService_1 = require("../services/authService");
const designerProjectService_1 = require("../services/designerProjectService");
require("../styles/Dashboard.css");
require("../styles/DesignerProjects.css");
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function formatStatus(value) {
    if (!value) {
        return 'Unknown';
    }
    return value
        .toLowerCase()
        .split('_')
        .map(word => word.charAt(0)
        .toUpperCase() +
        word.slice(1))
        .join(' ');
}
function DesignerProjectDetailsPage() {
    const { projectId } = (0, react_router_dom_1.useParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [projectData, setProjectData] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [downloadingId, setDownloadingId] = (0, react_1.useState)(null);
    const email = (0, authService_1.getStoredEmail)() || '';
    const designerName = (0, authService_1.getStoredDisplayName)('Designer');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        async function loadPage() {
            try {
                const data = await (0, designerProjectService_1.loadDesignerProjectDetails)(projectId);
                if (cancelled) {
                    return;
                }
                setProjectData(data);
                setError('');
            }
            catch (err) {
                if (cancelled) {
                    return;
                }
                setError(err.message ||
                    'Unable to load project workspace.');
            }
            finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadPage();
        return () => {
            cancelled =
                true;
        };
    }, [
        projectId
    ]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    async function handleDownload(version) {
        try {
            setDownloadingId(version.versionId);
            const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/${version.versionId}/download`);
            if (!response.ok) {
                let data = null;
                try {
                    data =
                        await response.json();
                }
                catch {
                    data = null;
                }
                throw new Error(data?.message ||
                    'Unable to download this version.');
            }
            const blob = await response.blob();
            const contentDisposition = response.headers.get('Content-Disposition');
            let fileName = `version-${version.versionNumber}`;
            const match = contentDisposition?.match(/filename="?([^"]+)"?/);
            if (match?.[1]) {
                fileName =
                    match[1];
            }
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href =
                url;
            anchor.download =
                fileName;
            document.body.appendChild(anchor);
            anchor.click();
            anchor.remove();
            window.URL.revokeObjectURL(url);
        }
        catch (err) {
            setError(err.message ||
                'Unable to download this file.');
        }
        finally {
            setDownloadingId(null);
        }
    }
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    if (loading) {
        return (h("div", { className: "dashboard-page" },
            h(DesignerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
            h("div", { className: "dashboard-content" },
                h("div", { className: "designer-project-loading" }, "Loading project workspace..."))));
    }
    if (!projectData) {
        return (h("div", { className: "dashboard-page" },
            h(DesignerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
            h("div", { className: "dashboard-content" },
                h("div", { className: "designer-project-loading" }, error ||
                    'Project not found.'))));
    }
    const delivered = projectData.projectStatus ===
        'DELIVERED';
    const displayStatus = delivered
        ? 'Delivered'
        : formatStatus(projectData.workflowStatus);
    const latestVersion = projectData.latestVersion;
    const latestRenderJob = projectData.latestRenderJob;
    return (h("div", { className: "dashboard-page" },
        h(DesignerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Open profile menu" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, designerName),
                                    h("span", null, email),
                                    h("small", null, "Interior Designer")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "designer-workspace-main" },
                h("button", { type: "button", className: "designer-workspace-back", onClick: () => navigate('/designer/projects') },
                    h(lucide_react_1.ArrowLeft, { size: 16 }),
                    "Projects"),
                h("div", { className: "designer-workspace-heading" },
                    h("div", null,
                        h("p", null, "Project Workspace"),
                        h("h1", null, projectData.projectName),
                        h("span", null, "Access project files, versions, feedback, and production workflow.")),
                    h("span", { className: "designer-workspace-status" }, displayStatus)),
                error &&
                    (h("div", { className: "designer-projects-error" }, error)),
                h("section", { className: "designer-workspace-summary" },
                    h("div", null,
                        h("span", null, "Client"),
                        h("strong", null,
                            h(lucide_react_1.UserRound, { size: 15 }),
                            projectData.clientName)),
                    h("div", null,
                        h("span", null, "Assigned Designer"),
                        h("strong", null,
                            h(lucide_react_1.UserRound, { size: 15 }),
                            projectData.designerName)),
                    h("div", null,
                        h("span", null, "Project Manager"),
                        h("strong", null,
                            h(lucide_react_1.UserRound, { size: 15 }),
                            projectData.projectManagerName)),
                    h("div", null,
                        h("span", null, "Status"),
                        h("strong", null, displayStatus))),
                h("section", { className: "designer-workspace-actions" },
                    h("button", { type: "button", disabled: delivered, onClick: () => navigate(`/designer/assets/upload?projectId=${projectId}`) },
                        h(lucide_react_1.Upload, { size: 17 }),
                        "Upload Asset"),
                    h("button", { type: "button", disabled: delivered, onClick: () => navigate(`/designer/versions/upload?projectId=${projectId}`) },
                        h(lucide_react_1.FileClock, { size: 17 }),
                        "Upload New Version"),
                    h("button", { type: "button", onClick: () => navigate(`/designer/versions?projectId=${projectId}`) },
                        h(lucide_react_1.Layers3, { size: 17 }),
                        "Version History"),
                    h("button", { type: "button", onClick: () => navigate('/designer/render-queue') },
                        h(lucide_react_1.ListChecks, { size: 17 }),
                        "Render Queue")),
                delivered &&
                    (h("div", { className: "designer-workspace-locked" },
                        h(lucide_react_1.CheckCircle2, { size: 18 }),
                        "This project has been delivered. Design workflow changes are locked.")),
                h("section", { className: "designer-workspace-stats" },
                    h("article", null,
                        h(lucide_react_1.Folder, { size: 21 }),
                        h("div", null,
                            h("span", null, "Assets"),
                            h("strong", null, projectData.assets.length))),
                    h("article", null,
                        h(lucide_react_1.Layers3, { size: 21 }),
                        h("div", null,
                            h("span", null, "Versions"),
                            h("strong", null, projectData.versions.length))),
                    h("article", null,
                        h(lucide_react_1.ListChecks, { size: 21 }),
                        h("div", null,
                            h("span", null, "Render Jobs"),
                            h("strong", null, projectData.renderJobs.length))),
                    h("article", null,
                        h(lucide_react_1.Box, { size: 21 }),
                        h("div", null,
                            h("span", null, "Final Output"),
                            h("strong", null, projectData.latestOutput
                                ? 'Available'
                                : 'Not Available')))),
                h("section", { className: "designer-workspace-grid" },
                    h("article", { className: "designer-workspace-card" },
                        h("div", { className: "designer-workspace-card-header" },
                            h("div", null,
                                h("h2", null, "Project Information"),
                                h("span", null, "Main project details and requirements.")),
                            h(lucide_react_1.Folder, { size: 20 })),
                        h("div", { className: "designer-workspace-card-body" },
                            h("div", null,
                                h("span", null, "Description"),
                                h("p", null, projectData.description ||
                                    'No project description provided.')),
                            h("div", { className: "designer-workspace-info-row" },
                                h("span", null, "Created"),
                                h("strong", null, formatDateTime(projectData.createdAt))),
                            h("div", { className: "designer-workspace-info-row" },
                                h("span", null, "Project Status"),
                                h("strong", null, projectData.projectStatus)))),
                    h("article", { className: "designer-workspace-card" },
                        h("div", { className: "designer-workspace-card-header" },
                            h("div", null,
                                h("h2", null, "Current Workflow"),
                                h("span", null, "Latest design and render state.")),
                            h(lucide_react_1.Clock3, { size: 20 })),
                        h("div", { className: "designer-workspace-card-body" },
                            h("div", { className: "designer-workspace-info-row" },
                                h("span", null, "Latest Version"),
                                h("strong", null, latestVersion
                                    ? `v${latestVersion.versionNumber} · ${formatStatus(latestVersion.status)}`
                                    : 'No version')),
                            h("div", { className: "designer-workspace-info-row" },
                                h("span", null, "Latest Render Job"),
                                h("strong", null, latestRenderJob
                                    ? `R-${String(latestRenderJob.renderJobId).padStart(3, '0')} · ${formatStatus(latestRenderJob.status)}`
                                    : 'No render job')),
                            h("div", { className: "designer-workspace-info-row" },
                                h("span", null, "Final Output"),
                                h("strong", null, projectData.latestOutput
                                    ? 'Available'
                                    : 'Not Available'))))),
                h("section", { className: "designer-workspace-card designer-workspace-versions" },
                    h("div", { className: "designer-workspace-card-header" },
                        h("div", null,
                            h("h2", null, "Recent Versions"),
                            h("span", null, "Latest uploaded design versions in this project.")),
                        h(lucide_react_1.Layers3, { size: 20 })),
                    projectData.versions.length ===
                        0
                        ? (h("div", { className: "designer-workspace-empty" },
                            h(lucide_react_1.Layers3, { size: 28 }),
                            h("strong", null, "No versions yet"),
                            h("span", null, "Upload the first asset to begin version tracking.")))
                        : (h("div", { className: "designer-workspace-version-table-wrap" },
                            h("table", { className: "designer-workspace-version-table" },
                                h("thead", null,
                                    h("tr", null,
                                        h("th", null, "Version"),
                                        h("th", null, "Asset"),
                                        h("th", null, "Status"),
                                        h("th", null, "Uploaded By"),
                                        h("th", null, "Uploaded"),
                                        h("th", null, "Change Notes"),
                                        h("th", null, "Action"))),
                                h("tbody", null, [...projectData.versions]
                                    .sort((a, b) => new Date(b.uploadedAt ||
                                    0) -
                                    new Date(a.uploadedAt ||
                                        0))
                                    .slice(0, 5)
                                    .map(version => (h("tr", { key: version.versionId },
                                    h("td", null,
                                        h("strong", null,
                                            "v",
                                            version.versionNumber)),
                                    h("td", null, version.asset?.assetName ||
                                        'Design Asset'),
                                    h("td", null,
                                        h("span", { className: "designer-workspace-version-status" }, formatStatus(version.status))),
                                    h("td", null, version.uploadedBy
                                        ? `${version.uploadedBy.firstName || ''} ${version.uploadedBy.lastName || ''}`.trim() ||
                                            version.uploadedBy.email
                                        : 'Interior Designer'),
                                    h("td", null, formatDateTime(version.uploadedAt)),
                                    h("td", null, version.changeNotes ||
                                        '—'),
                                    h("td", null,
                                        h("button", { type: "button", className: "designer-workspace-download", disabled: downloadingId ===
                                                version.versionId, onClick: () => handleDownload(version) },
                                            h(lucide_react_1.Download, { size: 15 }),
                                            downloadingId ===
                                                version.versionId
                                                ? 'Downloading...'
                                                : 'Download')))))))))),
                h("section", { className: "designer-workspace-feedback-callout" },
                    h(lucide_react_1.MessageCircle, { size: 21 }),
                    h("div", null,
                        h("strong", null, "Client Feedback"),
                        h("span", null, "Revision requests and client comments remain available through the Client Feedback workspace.")))))));
}
exports.default = DesignerProjectDetailsPage;

});
__register("src/pages/DesignerProjectsPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const DesignerSidebar_1 = __importDefault(require("../components/DesignerSidebar"));
const authService_1 = require("../services/authService");
const designerProjectService_1 = require("../services/designerProjectService");
require("../styles/Dashboard.css");
require("../styles/DesignerProjects.css");
const STATUS_CONFIG = {
    DRAFT: {
        label: 'Draft',
        className: 'designer-project-status-draft'
    },
    FOR_REVIEW: {
        label: 'For Review',
        className: 'designer-project-status-review'
    },
    REVISION_REQUESTED: {
        label: 'Revision Requested',
        className: 'designer-project-status-revision'
    },
    RENDER_READY: {
        label: 'Render Ready',
        className: 'designer-project-status-ready'
    },
    RENDERING: {
        label: 'Rendering',
        className: 'designer-project-status-rendering'
    },
    COMPLETED: {
        label: 'Completed',
        className: 'designer-project-status-completed'
    },
    DELIVERED: {
        label: 'Delivered',
        className: 'designer-project-status-delivered'
    }
};
function formatDate(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
function getDisplayStatus(project) {
    if (project.projectStatus ===
        'DELIVERED') {
        return STATUS_CONFIG.DELIVERED;
    }
    return (STATUS_CONFIG[project.workflowStatus] ||
        STATUS_CONFIG.DRAFT);
}
function DesignerProjectsPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [projects, setProjects] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [search, setSearch] = (0, react_1.useState)('');
    const [statusFilter, setStatusFilter] = (0, react_1.useState)('ALL');
    const email = (0, authService_1.getStoredEmail)() || '';
    const designerName = (0, authService_1.getStoredDisplayName)('Designer');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        async function loadPage() {
            try {
                const data = await (0, designerProjectService_1.loadDesignerProjects)();
                if (cancelled) {
                    return;
                }
                setProjects(data);
                setError('');
            }
            catch (err) {
                if (cancelled) {
                    return;
                }
                setError(err.message ||
                    'Unable to load assigned projects.');
            }
            finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadPage();
        return () => {
            cancelled =
                true;
        };
    }, []);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const activeProjects = projects.filter(project => project.projectStatus !==
        'DELIVERED').length;
    const revisionProjects = projects.filter(project => project.projectStatus !==
        'DELIVERED' &&
        project.workflowStatus ===
            'REVISION_REQUESTED').length;
    const renderReadyProjects = projects.filter(project => project.projectStatus !==
        'DELIVERED' &&
        project.workflowStatus ===
            'RENDER_READY').length;
    const deliveredProjects = projects.filter(project => project.projectStatus ===
        'DELIVERED').length;
    const normalizedSearch = search
        .trim()
        .toLowerCase();
    const visibleProjects = projects.filter(project => {
        const displayStatus = project.projectStatus ===
            'DELIVERED'
            ? 'DELIVERED'
            : project.workflowStatus;
        const matchesStatus = statusFilter ===
            'ALL' ||
            displayStatus ===
                statusFilter;
        const searchText = [
            project.projectName,
            project.clientName,
            project.projectManagerName,
            project.workflowStatus
        ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
        const matchesSearch = !normalizedSearch ||
            searchText.includes(normalizedSearch);
        return (matchesStatus &&
            matchesSearch);
    });
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    return (h("div", { className: "dashboard-page" },
        h(DesignerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Open profile menu" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, designerName),
                                    h("span", null, email),
                                    h("small", null, "Interior Designer")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "designer-projects-main" },
                h("div", { className: "designer-projects-heading" },
                    h("div", null,
                        h("p", null, "Project Workspace"),
                        h("h1", null, "My Projects"),
                        h("span", null, "View projects assigned to you and continue the design workflow."))),
                error &&
                    (h("div", { className: "designer-projects-error" }, error)),
                h("section", { className: "designer-projects-stats" },
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Folder, { size: 20 })),
                        h("span", null, "Assigned Projects"),
                        h("strong", null, projects.length)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Clock3, { size: 20 })),
                        h("span", null, "Active"),
                        h("strong", null, activeProjects)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Box, { size: 20 })),
                        h("span", null, "Revision Requests"),
                        h("strong", null, revisionProjects)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.CheckCircle2, { size: 20 })),
                        h("span", null, "Render Ready"),
                        h("strong", null, renderReadyProjects)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.CheckCircle2, { size: 20 })),
                        h("span", null, "Delivered"),
                        h("strong", null, deliveredProjects))),
                h("section", { className: "designer-projects-card" },
                    h("div", { className: "designer-projects-toolbar" },
                        h("div", { className: "designer-projects-search" },
                            h(lucide_react_1.Search, { size: 17 }),
                            h("input", { type: "text", value: search, placeholder: "Search projects or clients...", onChange: event => setSearch(event.target.value) })),
                        h("select", { value: statusFilter, onChange: event => setStatusFilter(event.target.value) },
                            h("option", { value: "ALL" }, "All Statuses"),
                            h("option", { value: "DRAFT" }, "Draft"),
                            h("option", { value: "FOR_REVIEW" }, "For Review"),
                            h("option", { value: "REVISION_REQUESTED" }, "Revision Requested"),
                            h("option", { value: "RENDER_READY" }, "Render Ready"),
                            h("option", { value: "RENDERING" }, "Rendering"),
                            h("option", { value: "COMPLETED" }, "Completed"),
                            h("option", { value: "DELIVERED" }, "Delivered"))),
                    loading
                        ? (h("div", { className: "designer-projects-empty" }, "Loading assigned projects..."))
                        : visibleProjects.length ===
                            0
                            ? (h("div", { className: "designer-projects-empty" },
                                h(lucide_react_1.Folder, { size: 30 }),
                                h("strong", null, "No projects found"),
                                h("span", null, "No assigned project matches the selected filter.")))
                            : (h("div", { className: "designer-projects-table-wrap" },
                                h("table", { className: "designer-projects-table" },
                                    h("thead", null,
                                        h("tr", null,
                                            h("th", null, "Project"),
                                            h("th", null, "Client"),
                                            h("th", null, "Project Manager"),
                                            h("th", null, "Status"),
                                            h("th", null, "Assets"),
                                            h("th", null, "Versions"),
                                            h("th", null, "Last Updated"),
                                            h("th", null, "Action"))),
                                    h("tbody", null, visibleProjects.map(project => {
                                        const status = getDisplayStatus(project);
                                        return (h("tr", { key: project.projectId },
                                            h("td", null,
                                                h("div", { className: "designer-project-name-cell" },
                                                    h("div", null,
                                                        h(lucide_react_1.Folder, { size: 18 })),
                                                    h("span", null,
                                                        h("strong", null, project.projectName),
                                                        h("small", null,
                                                            "Project #",
                                                            project.projectId)))),
                                            h("td", null, project.clientName),
                                            h("td", null, project.projectManagerName),
                                            h("td", null,
                                                h("span", { className: `designer-project-status ${status.className}` },
                                                    h("i", null),
                                                    status.label)),
                                            h("td", null, project.assets.length),
                                            h("td", null, project.versions.length),
                                            h("td", null, formatDate(project.lastUpdated)),
                                            h("td", null,
                                                h("button", { type: "button", className: "designer-project-open-button", onClick: () => navigate(`/designer/projects/${project.projectId}`) }, "Open Workspace"))));
                                    }))))),
                    h("div", { className: "designer-projects-footer" },
                        "Showing ",
                        visibleProjects.length,
                        " of ",
                        projects.length,
                        " assigned projects"))))));
}
exports.default = DesignerProjectsPage;

});
__register("src/pages/DesignerRenderQueuePage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const DesignerSidebar_1 = __importDefault(require("../components/DesignerSidebar"));
const authService_1 = require("../services/authService");
const designerRenderQueueService_1 = require("../services/designerRenderQueueService");
require("../styles/Dashboard.css");
require("../styles/DesignerRenderQueue.css");
function formatStatus(value) {
    if (!value) {
        return 'Unknown';
    }
    return String(value)
        .replaceAll('_', ' ')
        .toLowerCase()
        .replace(/\b\w/g, character => character.toUpperCase());
}
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function getUserName(user) {
    if (!user) {
        return 'Unknown';
    }
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`
        .trim();
    return (fullName ||
        user.email ||
        'Unknown');
}
function DesignerRenderQueuePage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [jobs, setJobs] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [searchText, setSearchText] = (0, react_1.useState)('');
    const [statusFilter, setStatusFilter] = (0, react_1.useState)('ALL');
    const [updatingId, setUpdatingId] = (0, react_1.useState)(null);
    const [error, setError] = (0, react_1.useState)('');
    const [success, setSuccess] = (0, react_1.useState)('');
    const email = (0, authService_1.getStoredEmail)() || '';
    const designerName = (0, authService_1.getStoredDisplayName)('Designer');
    const counts = (0, react_1.useMemo)(() => ({
        total: jobs.length,
        queued: jobs.filter(job => job.status ===
            'QUEUED').length,
        rendering: jobs.filter(job => job.status ===
            'RENDERING').length,
        completed: jobs.filter(job => job.status ===
            'COMPLETED').length,
        failed: jobs.filter(job => job.status ===
            'FAILED').length
    }), [jobs]);
    const filteredJobs = (0, react_1.useMemo)(() => {
        const search = searchText
            .trim()
            .toLowerCase();
        return jobs.filter(job => {
            const matchesStatus = statusFilter ===
                'ALL' ||
                job.status ===
                    statusFilter;
            if (!matchesStatus) {
                return false;
            }
            if (!search) {
                return true;
            }
            const searchable = [
                job.renderJobId,
                job.project
                    ?.projectName,
                job.version
                    ?.asset
                    ?.assetName,
                job.version
                    ?.versionNumber,
                getUserName(job.submittedBy),
                job.priority,
                job.status
            ]
                .join(' ')
                .toLowerCase();
            return searchable.includes(search);
        });
    }, [
        jobs,
        searchText,
        statusFilter
    ]);
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        async function loadQueue() {
            try {
                setLoading(true);
                const data = await (0, designerRenderQueueService_1.loadDesignerRenderJobs)();
                if (cancelled) {
                    return;
                }
                setJobs(data);
                setError('');
            }
            catch (err) {
                if (cancelled) {
                    return;
                }
                setError(err.message ||
                    'Unable to load the render queue.');
            }
            finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadQueue();
        return () => {
            cancelled =
                true;
        };
    }, []);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    async function handleStatusUpdate(job, nextStatus) {
        try {
            setUpdatingId(job.renderJobId);
            setError('');
            setSuccess('');
            const updatedJob = await (0, designerRenderQueueService_1.updateRenderJobStatus)(job.renderJobId, nextStatus);
            setJobs(previous => previous.map(current => current.renderJobId ===
                updatedJob.renderJobId
                ? updatedJob
                : current));
            setSuccess(`Render Job R-${String(updatedJob.renderJobId).padStart(3, '0')} is now ${formatStatus(updatedJob.status)}.`);
        }
        catch (err) {
            setError(err.message ||
                'Unable to update the render job.');
        }
        finally {
            setUpdatingId(null);
        }
    }
    async function refreshJobs() {
        try {
            setLoading(true);
            setError('');
            setSuccess('');
            const data = await (0, designerRenderQueueService_1.loadDesignerRenderJobs)();
            setJobs(data);
        }
        catch (err) {
            setError(err.message ||
                'Unable to refresh the render queue.');
        }
        finally {
            setLoading(false);
        }
    }
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    const filters = [
        {
            key: 'ALL',
            label: 'All',
            count: counts.total
        },
        {
            key: 'QUEUED',
            label: 'Queued',
            count: counts.queued
        },
        {
            key: 'RENDERING',
            label: 'Rendering',
            count: counts.rendering
        },
        {
            key: 'COMPLETED',
            label: 'Completed',
            count: counts.completed
        },
        {
            key: 'FAILED',
            label: 'Failed',
            count: counts.failed
        }
    ];
    return (h("div", { className: "dashboard-page" },
        h(DesignerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true) },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("button", { type: "button", className: "designer-render-refresh-top", onClick: refreshJobs, disabled: loading },
                        h(lucide_react_1.RefreshCw, { size: 18 })),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous) },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, designerName),
                                    h("span", null, email),
                                    h("small", null, "Interior Designer")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "designer-render-main" },
                h("div", { className: "designer-render-heading" },
                    h("div", null,
                        h("p", { className: "designer-render-eyebrow" }, "Production"),
                        h("h1", null, "Render Queue"),
                        h("span", null, "Track approved design versions from Queued to Rendering, Completed, or Failed."))),
                error &&
                    (h("div", { className: "designer-render-error" }, error)),
                success &&
                    (h("div", { className: "designer-render-success" },
                        h(lucide_react_1.CheckCircle2, { size: 19 }),
                        success)),
                h("section", { className: "designer-render-stats" },
                    h("article", { className: "designer-render-stat" },
                        h("div", null,
                            h(lucide_react_1.ListChecks, { size: 21 })),
                        h("span", null, "Total Jobs"),
                        h("strong", null, counts.total)),
                    h("article", { className: "designer-render-stat" },
                        h("div", null,
                            h(lucide_react_1.Clock3, { size: 21 })),
                        h("span", null, "Queued"),
                        h("strong", null, counts.queued)),
                    h("article", { className: "designer-render-stat" },
                        h("div", null,
                            h(lucide_react_1.RefreshCw, { size: 21 })),
                        h("span", null, "Rendering"),
                        h("strong", null, counts.rendering)),
                    h("article", { className: "designer-render-stat" },
                        h("div", null,
                            h(lucide_react_1.CheckCircle2, { size: 21 })),
                        h("span", null, "Completed"),
                        h("strong", null, counts.completed)),
                    h("article", { className: "designer-render-stat" },
                        h("div", null,
                            h(lucide_react_1.CircleX, { size: 21 })),
                        h("span", null, "Failed"),
                        h("strong", null, counts.failed))),
                h("section", { className: "designer-render-table-card" },
                    h("div", { className: "designer-render-toolbar" },
                        h("div", { className: "designer-render-search" },
                            h(lucide_react_1.Search, { size: 17 }),
                            h("input", { type: "text", value: searchText, onChange: event => setSearchText(event.target.value), placeholder: "Search render jobs..." })),
                        h("div", { className: "designer-render-filters" }, filters.map(filter => (h("button", { type: "button", key: filter.key, className: statusFilter ===
                                filter.key
                                ? 'designer-render-filter designer-render-filter-active'
                                : 'designer-render-filter', onClick: () => setStatusFilter(filter.key) },
                            filter.label,
                            h("span", null, filter.count)))))),
                    loading
                        ? (h("div", { className: "designer-render-empty" },
                            h(lucide_react_1.RefreshCw, { size: 29 }),
                            h("strong", null, "Loading render jobs...")))
                        : filteredJobs.length
                            ? (h("div", { className: "designer-render-table-wrapper" },
                                h("table", { className: "designer-render-table" },
                                    h("thead", null,
                                        h("tr", null,
                                            h("th", null, "Job ID"),
                                            h("th", null, "Project"),
                                            h("th", null, "Approved Version"),
                                            h("th", null, "Submitted By"),
                                            h("th", null, "Priority"),
                                            h("th", null, "Status"),
                                            h("th", null, "Date Submitted"),
                                            h("th", null, "Completion Date"),
                                            h("th", null, "Action"))),
                                    h("tbody", null, filteredJobs.map(job => {
                                        const busy = updatingId ===
                                            job.renderJobId;
                                        return (h("tr", { key: job.renderJobId },
                                            h("td", null,
                                                h("strong", { className: "designer-render-job-id" },
                                                    "R-",
                                                    String(job.renderJobId).padStart(3, '0'))),
                                            h("td", null,
                                                h("strong", { className: "designer-render-project-name" }, job.project
                                                    ?.projectName ||
                                                    '—'),
                                                h("span", { className: "designer-render-subtext" }, job.version
                                                    ?.asset
                                                    ?.assetName ||
                                                    'Design Asset')),
                                            h("td", null,
                                                h("span", { className: "designer-render-version" },
                                                    "v",
                                                    job.version
                                                        ?.versionNumber ||
                                                        '—')),
                                            h("td", null, getUserName(job.submittedBy)),
                                            h("td", null,
                                                h("span", { className: `designer-render-priority designer-render-priority-${String(job.priority ||
                                                        '').toLowerCase()}` }, formatStatus(job.priority))),
                                            h("td", null,
                                                h("span", { className: `designer-render-status designer-render-status-${String(job.status ||
                                                        '').toLowerCase()}` },
                                                    h("i", null),
                                                    formatStatus(job.status))),
                                            h("td", null, formatDateTime(job.submittedAt)),
                                            h("td", null, formatDateTime(job.completedAt)),
                                            h("td", null,
                                                h("div", { className: "designer-render-actions" },
                                                    job.status ===
                                                        'QUEUED' &&
                                                        (h("button", { type: "button", className: "designer-render-start", onClick: () => handleStatusUpdate(job, 'RENDERING'), disabled: busy },
                                                            h(lucide_react_1.Play, { size: 14 }),
                                                            busy
                                                                ? 'Updating...'
                                                                : 'Start Rendering')),
                                                    job.status ===
                                                        'RENDERING' &&
                                                        (h(Fragment, null,
                                                            h("button", { type: "button", className: "designer-render-complete", onClick: () => handleStatusUpdate(job, 'COMPLETED'), disabled: busy },
                                                                h(lucide_react_1.CheckCircle2, { size: 14 }),
                                                                "Complete"),
                                                            h("button", { type: "button", className: "designer-render-fail", onClick: () => handleStatusUpdate(job, 'FAILED'), disabled: busy },
                                                                h(lucide_react_1.CircleX, { size: 14 }),
                                                                "Failed"))),
                                                    job.status ===
                                                        'COMPLETED' &&
                                                        (h("button", { type: "button", className: "designer-render-complete", onClick: () => navigate(`/designer/render-jobs/${job.renderJobId}/final-output`) },
                                                            h(lucide_react_1.FileImage, { size: 14 }),
                                                            "Final Output")),
                                                    job.status ===
                                                        'FAILED' &&
                                                        (h("span", { className: "designer-render-failed-label" }, "Render Failed"))))));
                                    })))))
                            : (h("div", { className: "designer-render-empty" },
                                h(lucide_react_1.ListChecks, { size: 31 }),
                                h("strong", null, "No render jobs found"),
                                h("span", null, "Approved versions submitted to the Render Queue will appear here."))))))));
}
exports.default = DesignerRenderQueuePage;

});
__register("src/pages/DesignerUploadAssetPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const DesignerSidebar_1 = __importDefault(require("../components/DesignerSidebar"));
const authService_1 = require("../services/authService");
const designerAssetUploadService_1 = require("../services/designerAssetUploadService");
require("../styles/Dashboard.css");
require("../styles/DesignerUploadAsset.css");
const INITIAL_FORM = {
    projectId: '',
    assetName: '',
    assetType: '3D_MODEL',
    category: 'INTERIOR_DESIGN',
    description: '',
    tags: '',
    changeNotes: 'Initial asset upload.',
    file: null
};
const ASSET_TYPES = [
    {
        value: '3D_MODEL',
        label: '3D Model'
    },
    {
        value: 'TEXTURE',
        label: 'Texture'
    },
    {
        value: 'RENDER',
        label: 'Render'
    },
    {
        value: 'MOOD_BOARD',
        label: 'Mood Board'
    }
];
const CATEGORIES = [
    {
        value: 'INTERIOR_DESIGN',
        label: 'Interior Design'
    },
    {
        value: 'FURNITURE',
        label: 'Furniture'
    },
    {
        value: 'MATERIAL',
        label: 'Material'
    },
    {
        value: 'FLOOR_PLAN',
        label: 'Floor Plan'
    },
    {
        value: 'LIGHTING_PRESET',
        label: 'Lighting Preset'
    }
];
function DesignerUploadAssetPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const fileInputRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [projects, setProjects] = (0, react_1.useState)([]);
    const [loadingProjects, setLoadingProjects] = (0, react_1.useState)(true);
    const [form, setForm] = (0, react_1.useState)(INITIAL_FORM);
    const [submitting, setSubmitting] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    const [success, setSuccess] = (0, react_1.useState)(null);
    const email = (0, authService_1.getStoredEmail)() || '';
    const designerName = (0, authService_1.getStoredDisplayName)('Designer');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        (0, designerAssetUploadService_1.loadDesignerProjects)()
            .then(data => {
            if (cancelled) {
                return;
            }
            setProjects(data);
            if (data.length === 1) {
                setForm(previous => ({
                    ...previous,
                    projectId: String(data[0]
                        .projectId)
                }));
            }
            setError('');
        })
            .catch(err => {
            if (cancelled) {
                return;
            }
            setError(err.message ||
                'Unable to load projects.');
        })
            .finally(() => {
            if (cancelled) {
                return;
            }
            setLoadingProjects(false);
        });
        return () => {
            cancelled = true;
        };
    }, []);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    function updateField(field, value) {
        setForm(previous => ({
            ...previous,
            [field]: value
        }));
        setError('');
        setSuccess(null);
    }
    function handleFileChange(event) {
        const file = event.target.files?.[0] ||
            null;
        if (!file) {
            updateField('file', null);
            return;
        }
        const fileError = (0, designerAssetUploadService_1.validateAssetFile)(file);
        if (fileError) {
            event.target.value = '';
            setForm(previous => ({
                ...previous,
                file: null
            }));
            setError(fileError);
            return;
        }
        updateField('file', file);
    }
    function removeFile() {
        setForm(previous => ({
            ...previous,
            file: null
        }));
        if (fileInputRef.current) {
            fileInputRef.current.value =
                '';
        }
    }
    function validateForm() {
        if (!form.projectId) {
            return 'Project is required.';
        }
        if (!form.assetName.trim()) {
            return 'Asset Name is required.';
        }
        if (!form.assetType) {
            return 'Asset Type is required.';
        }
        if (!form.category) {
            return 'Category is required.';
        }
        if (!form.description.trim()) {
            return 'Description is required.';
        }
        const fileError = (0, designerAssetUploadService_1.validateAssetFile)(form.file);
        if (fileError) {
            return fileError;
        }
        return '';
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }
        try {
            setSubmitting(true);
            setError('');
            setSuccess(null);
            const result = await (0, designerAssetUploadService_1.createAssetWithInitialVersion)(form);
            setSuccess({
                assetName: result
                    .asset
                    .assetName,
                assetId: result
                    .asset
                    .assetId,
                versionNumber: result
                    .version
                    .versionNumber
            });
            setForm({
                ...INITIAL_FORM,
                projectId: form.projectId
            });
            if (fileInputRef.current) {
                fileInputRef.current.value =
                    '';
            }
        }
        catch (err) {
            setError(err.message ||
                'Unable to upload the asset.');
        }
        finally {
            setSubmitting(false);
        }
    }
    function handleCancel() {
        navigate('/designer/dashboard');
    }
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    const selectedProject = projects.find(project => String(project.projectId) ===
        String(form.projectId));
    const hasProjects = projects.length > 0;
    return (h("div", { className: "dashboard-page" },
        h(DesignerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, designerName),
                                    h("span", null, email),
                                    h("small", null, "Interior Designer")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "designer-upload-main" },
                h("div", { className: "designer-upload-heading" },
                    h("div", null,
                        h("p", { className: "designer-upload-eyebrow" }, "Asset Library"),
                        h("h1", null, "Upload Asset"),
                        h("span", null, "Add a new project asset and upload its initial Version 1 file."))),
                error &&
                    (h("div", { className: "designer-upload-error" }, error)),
                success &&
                    (h("div", { className: "designer-upload-success" },
                        h(lucide_react_1.CircleCheck, { size: 21 }),
                        h("div", null,
                            h("strong", null, "Asset Uploaded Successfully"),
                            h("span", null,
                                success.assetName,
                                " was created as Version ",
                                success.versionNumber ||
                                    1,
                                ".")))),
                !loadingProjects &&
                    !hasProjects
                    ? (h("section", { className: "designer-upload-empty" },
                        h(lucide_react_1.Folder, { size: 34 }),
                        h("h2", null, "No active project available"),
                        h("p", null, "You need an active assigned project before you can upload a new asset.")))
                    : (h("form", { className: "designer-upload-layout", onSubmit: handleSubmit },
                        h("section", { className: "designer-upload-card" },
                            h("div", { className: "designer-upload-card-header" },
                                h("div", null,
                                    h("h2", null, "Asset Information"),
                                    h("span", null, "Define where the asset belongs and how it should be organized.")),
                                h(lucide_react_1.FileBox, { size: 21 })),
                            h("div", { className: "designer-upload-fields" },
                                h("div", { className: "designer-upload-field designer-upload-field-wide" },
                                    h("label", { htmlFor: "assetProject" }, "Project *"),
                                    h("select", { id: "assetProject", value: form.projectId, onChange: event => updateField('projectId', event.target.value), disabled: submitting ||
                                            loadingProjects },
                                        h("option", { value: "" }, loadingProjects
                                            ? 'Loading projects...'
                                            : 'Select an active project'),
                                        projects.map(project => (h("option", { key: project.projectId, value: project.projectId }, project.projectName))))),
                                h("div", { className: "designer-upload-field designer-upload-field-wide" },
                                    h("label", { htmlFor: "assetName" }, "Asset Name *"),
                                    h("input", { id: "assetName", type: "text", value: form.assetName, onChange: event => updateField('assetName', event.target.value), placeholder: "Example: Living Room 3D Model", disabled: submitting })),
                                h("div", { className: "designer-upload-field" },
                                    h("label", { htmlFor: "assetType" }, "Asset Type *"),
                                    h("select", { id: "assetType", value: form.assetType, onChange: event => updateField('assetType', event.target.value), disabled: submitting }, ASSET_TYPES.map(type => (h("option", { key: type.value, value: type.value }, type.label))))),
                                h("div", { className: "designer-upload-field" },
                                    h("label", { htmlFor: "assetCategory" }, "Category *"),
                                    h("select", { id: "assetCategory", value: form.category, onChange: event => updateField('category', event.target.value), disabled: submitting }, CATEGORIES.map(category => (h("option", { key: category.value, value: category.value }, category.label))))),
                                h("div", { className: "designer-upload-field designer-upload-field-wide" },
                                    h("label", { htmlFor: "assetDescription" }, "Description *"),
                                    h("textarea", { id: "assetDescription", value: form.description, onChange: event => updateField('description', event.target.value), placeholder: "Describe the asset, its purpose, and relevant design information.", rows: 5, disabled: submitting })),
                                h("div", { className: "designer-upload-field designer-upload-field-wide" },
                                    h("label", { htmlFor: "assetTags" }, "Metadata / Tags"),
                                    h("div", { className: "designer-upload-input-icon" },
                                        h(lucide_react_1.Tag, { size: 16 }),
                                        h("input", { id: "assetTags", type: "text", value: form.tags, onChange: event => updateField('tags', event.target.value), placeholder: "Example: living-room, modern, wood, warm-lighting", disabled: submitting }))))),
                        h("aside", { className: "designer-upload-side" },
                            h("section", { className: "designer-upload-card" },
                                h("div", { className: "designer-upload-card-header" },
                                    h("div", null,
                                        h("h2", null, "Initial Version"),
                                        h("span", null, "The first uploaded file automatically becomes Version 1.")),
                                    h(lucide_react_1.FileUp, { size: 21 })),
                                h("div", { className: "designer-upload-file-section" },
                                    h("input", { ref: fileInputRef, id: "assetFile", type: "file", accept: ".blend,.skp,.obj,.fbx,.glb,.gltf", onChange: handleFileChange, disabled: submitting, hidden: true }),
                                    form.file
                                        ? (h("div", { className: "designer-selected-file" },
                                            h("div", { className: "designer-selected-file-icon" },
                                                h(lucide_react_1.FileBox, { size: 25 })),
                                            h("div", { className: "designer-selected-file-info" },
                                                h("strong", null, form.file.name),
                                                h("span", null,
                                                    (form.file.size /
                                                        1024 /
                                                        1024).toFixed(2),
                                                    " MB")),
                                            h("button", { type: "button", onClick: removeFile, disabled: submitting, "aria-label": "Remove selected file" },
                                                h(lucide_react_1.X, { size: 17 }))))
                                        : (h("button", { type: "button", className: "designer-upload-dropzone", onClick: () => fileInputRef
                                                .current
                                                ?.click(), disabled: submitting },
                                            h(lucide_react_1.UploadCloud, { size: 32 }),
                                            h("strong", null, "Select Asset File"),
                                            h("span", null, "BLEND, SKP, OBJ, FBX, GLB or GLTF"),
                                            h("small", null, "Maximum file size: 100 MB"))),
                                    h("div", { className: "designer-upload-field" },
                                        h("label", { htmlFor: "initialChangeNotes" }, "Initial Version Note"),
                                        h("textarea", { id: "initialChangeNotes", value: form.changeNotes, onChange: event => updateField('changeNotes', event.target.value), rows: 4, placeholder: "Describe this initial version.", disabled: submitting })))),
                            h("section", { className: "designer-upload-info-card" },
                                h(lucide_react_1.Info, { size: 19 }),
                                h("div", null,
                                    h("strong", null, "Upload behavior"),
                                    h("p", null, "Creating this asset also uploads its first file as Version 1 with Draft status."),
                                    selectedProject &&
                                        (h("span", null,
                                            "Project: ",
                                            selectedProject
                                                .projectName))))),
                        h("div", { className: "designer-upload-actions" },
                            h("button", { type: "button", className: "designer-upload-cancel", onClick: handleCancel, disabled: submitting }, "Cancel"),
                            h("button", { type: "submit", className: "designer-upload-submit", disabled: submitting ||
                                    !hasProjects },
                                h(lucide_react_1.UploadCloud, { size: 17 }),
                                submitting
                                    ? 'Uploading...'
                                    : 'Upload Asset'))))))));
}
exports.default = DesignerUploadAssetPage;

});
__register("src/pages/DesignerUploadVersionPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const DesignerSidebar_1 = __importDefault(require("../components/DesignerSidebar"));
const authService_1 = require("../services/authService");
const designerAssetUploadService_1 = require("../services/designerAssetUploadService");
const designerVersionUploadService_1 = require("../services/designerVersionUploadService");
require("../styles/Dashboard.css");
require("../styles/DesignerUploadVersion.css");
function formatStatus(value) {
    if (!value) {
        return 'Unknown';
    }
    return String(value)
        .replaceAll('_', ' ')
        .toLowerCase()
        .replace(/\b\w/g, character => character.toUpperCase());
}
function DesignerUploadVersionPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const fileInputRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [projects, setProjects] = (0, react_1.useState)([]);
    const [assets, setAssets] = (0, react_1.useState)([]);
    const [versions, setVersions] = (0, react_1.useState)([]);
    const [projectId, setProjectId] = (0, react_1.useState)('');
    const [assetId, setAssetId] = (0, react_1.useState)('');
    const [revisionNote, setRevisionNote] = (0, react_1.useState)('');
    const [file, setFile] = (0, react_1.useState)(null);
    const [loadingProjects, setLoadingProjects] = (0, react_1.useState)(true);
    const [loadingAssets, setLoadingAssets] = (0, react_1.useState)(false);
    const [loadingVersions, setLoadingVersions] = (0, react_1.useState)(false);
    const [submitting, setSubmitting] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    const [success, setSuccess] = (0, react_1.useState)(null);
    const email = (0, authService_1.getStoredEmail)() || '';
    const designerName = (0, authService_1.getStoredDisplayName)('Designer');
    const selectedProject = (0, react_1.useMemo)(() => projects.find(project => String(project.projectId) ===
        String(projectId)) ||
        null, [
        projects,
        projectId
    ]);
    const selectedAsset = (0, react_1.useMemo)(() => assets.find(asset => String(asset.assetId) ===
        String(assetId)) ||
        null, [
        assets,
        assetId
    ]);
    const currentVersion = versions.length
        ? versions[0]
        : null;
    const currentVersionNumber = Number(currentVersion?.versionNumber ||
        0);
    const nextVersionNumber = currentVersionNumber + 1;
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        (0, designerVersionUploadService_1.loadActiveDesignerProjects)()
            .then(data => {
            if (cancelled) {
                return;
            }
            setProjects(data);
            setError('');
        })
            .catch(err => {
            if (cancelled) {
                return;
            }
            setError(err.message ||
                'Unable to load projects.');
        })
            .finally(() => {
            if (cancelled) {
                return;
            }
            setLoadingProjects(false);
        });
        return () => {
            cancelled =
                true;
        };
    }, []);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    async function handleProjectChange(event) {
        const value = event.target.value;
        setProjectId(value);
        setAssetId('');
        setAssets([]);
        setVersions([]);
        setFile(null);
        setRevisionNote('');
        setSuccess(null);
        setError('');
        if (fileInputRef.current) {
            fileInputRef.current.value =
                '';
        }
        if (!value) {
            return;
        }
        try {
            setLoadingAssets(true);
            const data = await (0, designerVersionUploadService_1.loadProjectAssets)(value);
            setAssets(data);
        }
        catch (err) {
            setError(err.message ||
                'Unable to load project assets.');
        }
        finally {
            setLoadingAssets(false);
        }
    }
    async function handleAssetChange(event) {
        const value = event.target.value;
        setAssetId(value);
        setVersions([]);
        setFile(null);
        setRevisionNote('');
        setSuccess(null);
        setError('');
        if (fileInputRef.current) {
            fileInputRef.current.value =
                '';
        }
        if (!value) {
            return;
        }
        try {
            setLoadingVersions(true);
            const data = await (0, designerVersionUploadService_1.loadAssetVersions)(value);
            setVersions(data);
        }
        catch (err) {
            setError(err.message ||
                'Unable to load current version.');
        }
        finally {
            setLoadingVersions(false);
        }
    }
    function handleFileChange(event) {
        const selectedFile = event.target.files?.[0] ||
            null;
        if (!selectedFile) {
            setFile(null);
            return;
        }
        const validationError = (0, designerAssetUploadService_1.validateAssetFile)(selectedFile);
        if (validationError) {
            event.target.value =
                '';
            setFile(null);
            setError(validationError);
            return;
        }
        setFile(selectedFile);
        setError('');
        setSuccess(null);
    }
    function removeFile() {
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value =
                '';
        }
    }
    function validateForm() {
        if (!projectId) {
            return 'Project is required.';
        }
        if (!assetId) {
            return 'Asset is required.';
        }
        if (!file) {
            return 'Please select a new version file.';
        }
        const fileError = (0, designerAssetUploadService_1.validateAssetFile)(file);
        if (fileError) {
            return fileError;
        }
        if (!revisionNote.trim()) {
            return 'Revision Note is required.';
        }
        return '';
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }
        try {
            setSubmitting(true);
            setError('');
            setSuccess(null);
            const uploadedVersion = await (0, designerVersionUploadService_1.uploadNewAssetVersion)({
                assetId: Number(assetId),
                changeNotes: revisionNote,
                file
            });
            const refreshedVersions = await (0, designerVersionUploadService_1.loadAssetVersions)(assetId);
            setVersions(refreshedVersions);
            setSuccess({
                assetName: selectedAsset?.assetName ||
                    'Asset',
                versionNumber: uploadedVersion.versionNumber
            });
            setFile(null);
            setRevisionNote('');
            if (fileInputRef.current) {
                fileInputRef.current.value =
                    '';
            }
        }
        catch (err) {
            setError(err.message ||
                'Unable to upload the new version.');
        }
        finally {
            setSubmitting(false);
        }
    }
    function handleCancel() {
        navigate('/designer/versions');
    }
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    return (h("div", { className: "dashboard-page" },
        h(DesignerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, designerName),
                                    h("span", null, email),
                                    h("small", null, "Interior Designer")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "designer-version-main" },
                h("div", { className: "designer-version-heading" },
                    h("div", null,
                        h("p", { className: "designer-version-eyebrow" }, "Version Control"),
                        h("h1", null, "Upload New Version"),
                        h("span", null, "Upload a revised file for an existing asset while preserving its previous versions."))),
                error &&
                    (h("div", { className: "designer-version-error" }, error)),
                success &&
                    (h("div", { className: "designer-version-success" },
                        h(lucide_react_1.CircleCheck, { size: 21 }),
                        h("div", null,
                            h("strong", null, "New Version Uploaded Successfully"),
                            h("span", null,
                                "Version ",
                                success.versionNumber,
                                " has been added to ",
                                success.assetName,
                                ".")))),
                h("form", { className: "designer-version-layout", onSubmit: handleSubmit },
                    h("section", { className: "designer-version-card" },
                        h("div", { className: "designer-version-card-header" },
                            h("div", null,
                                h("h2", null, "Select Existing Asset"),
                                h("span", null, "Choose the active project and asset you want to revise.")),
                            h(lucide_react_1.FilePlus2, { size: 21 })),
                        h("div", { className: "designer-version-fields" },
                            h("div", { className: "designer-version-field" },
                                h("label", { htmlFor: "versionProject" }, "Project *"),
                                h("select", { id: "versionProject", value: projectId, onChange: handleProjectChange, disabled: submitting ||
                                        loadingProjects },
                                    h("option", { value: "" }, loadingProjects
                                        ? 'Loading projects...'
                                        : 'Select an active project'),
                                    projects.map(project => (h("option", { key: project.projectId, value: project.projectId }, project.projectName))))),
                            h("div", { className: "designer-version-field" },
                                h("label", { htmlFor: "versionAsset" }, "Asset *"),
                                h("select", { id: "versionAsset", value: assetId, onChange: handleAssetChange, disabled: submitting ||
                                        !projectId ||
                                        loadingAssets },
                                    h("option", { value: "" }, loadingAssets
                                        ? 'Loading assets...'
                                        : !projectId
                                            ? 'Select a project first'
                                            : assets.length
                                                ? 'Select an existing asset'
                                                : 'No assets in this project'),
                                    assets.map(asset => (h("option", { key: asset.assetId, value: asset.assetId }, asset.assetName))))),
                            selectedAsset &&
                                (h("div", { className: "designer-version-asset-summary" },
                                    h("div", null,
                                        h("span", null, "Asset Name"),
                                        h("strong", null, selectedAsset.assetName)),
                                    h("div", null,
                                        h("span", null, "Asset Type"),
                                        h("strong", null, formatStatus(selectedAsset.assetType))),
                                    h("div", null,
                                        h("span", null, "Category"),
                                        h("strong", null, formatStatus(selectedAsset.category))),
                                    h("div", null,
                                        h("span", null, "Project"),
                                        h("strong", null, selectedProject?.projectName ||
                                            '—')))),
                            assetId &&
                                !loadingVersions &&
                                (h("div", { className: "designer-version-flow" },
                                    h("div", { className: "designer-version-box" },
                                        h("span", null, "Current Version"),
                                        h("strong", null, currentVersion
                                            ? `v${currentVersionNumber}`
                                            : 'None'),
                                        currentVersion &&
                                            (h("small", null, formatStatus(currentVersion.status)))),
                                    h(lucide_react_1.ArrowRight, { size: 25 }),
                                    h("div", { className: "designer-version-box designer-version-box-next" },
                                        h("span", null, "Next Version"),
                                        h("strong", null,
                                            "v",
                                            nextVersionNumber),
                                        h("small", null, "Draft")))))),
                    h("aside", { className: "designer-version-side" },
                        h("section", { className: "designer-version-card" },
                            h("div", { className: "designer-version-card-header" },
                                h("div", null,
                                    h("h2", null, "New Version File"),
                                    h("span", null, "Upload the revised design file and describe the changes.")),
                                h(lucide_react_1.FileUp, { size: 21 })),
                            h("div", { className: "designer-version-upload-area" },
                                h("input", { ref: fileInputRef, id: "newVersionFile", type: "file", accept: ".blend,.skp,.obj,.fbx,.glb,.gltf", onChange: handleFileChange, disabled: submitting ||
                                        !assetId, hidden: true }),
                                file
                                    ? (h("div", { className: "designer-version-selected-file" },
                                        h("div", { className: "designer-version-file-icon" },
                                            h(lucide_react_1.FileBox, { size: 24 })),
                                        h("div", null,
                                            h("strong", null, file.name),
                                            h("span", null,
                                                (file.size /
                                                    1024 /
                                                    1024).toFixed(2),
                                                " MB")),
                                        h("button", { type: "button", onClick: removeFile, disabled: submitting },
                                            h(lucide_react_1.X, { size: 17 }))))
                                    : (h("button", { type: "button", className: "designer-version-dropzone", onClick: () => fileInputRef.current?.click(), disabled: submitting ||
                                            !assetId },
                                        h(lucide_react_1.UploadCloud, { size: 31 }),
                                        h("strong", null, "Select New File"),
                                        h("span", null, "BLEND, SKP, OBJ, FBX, GLB or GLTF"),
                                        h("small", null, "Maximum file size: 100 MB"))),
                                h("div", { className: "designer-version-field" },
                                    h("label", { htmlFor: "revisionNote" }, "Revision Note *"),
                                    h("textarea", { id: "revisionNote", value: revisionNote, onChange: event => {
                                            setRevisionNote(event.target.value);
                                            setError('');
                                            setSuccess(null);
                                        }, rows: 5, placeholder: "Example: Updated furniture layout and adjusted lighting based on client feedback.", disabled: submitting ||
                                            !assetId })))),
                        h("section", { className: "designer-version-info" },
                            h(lucide_react_1.Info, { size: 18 }),
                            h("div", null,
                                h("strong", null, "Versioning behavior"),
                                h("p", null, "The new file becomes the next version of this asset. Previous versions remain available on the dedicated Version History page.")))),
                    h("div", { className: "designer-version-actions" },
                        h("button", { type: "button", className: "designer-version-cancel", onClick: handleCancel, disabled: submitting }, "Cancel"),
                        h("button", { type: "submit", className: "designer-version-submit", disabled: submitting ||
                                !assetId },
                            h(lucide_react_1.UploadCloud, { size: 17 }),
                            submitting
                                ? 'Uploading...'
                                : `Upload New Version${assetId
                                    ? ` v${nextVersionNumber}`
                                    : ''}`)))))));
}
exports.default = DesignerUploadVersionPage;

});
__register("src/pages/DesignerVersionHistoryPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const DesignerSidebar_1 = __importDefault(require("../components/DesignerSidebar"));
const authService_1 = require("../services/authService");
const designerVersionUploadService_1 = require("../services/designerVersionUploadService");
const designerRenderQueueService_1 = require("../services/designerRenderQueueService");
require("../styles/Dashboard.css");
require("../styles/DesignerVersionHistory.css");
function formatStatus(value) {
    if (!value) {
        return 'Unknown';
    }
    return String(value)
        .replaceAll('_', ' ')
        .toLowerCase()
        .replace(/\b\w/g, character => character.toUpperCase());
}
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function getUploaderName(version) {
    const user = version.uploadedBy;
    if (!user) {
        return 'Unknown';
    }
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`
        .trim();
    return (fullName ||
        user.email ||
        'Unknown');
}
function getCommentUser(comment) {
    const user = comment.user ||
        comment.createdBy ||
        comment.commentedBy ||
        comment.author;
    if (!user) {
        return 'Client';
    }
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`
        .trim();
    return (fullName ||
        user.email ||
        'Client');
}
function getCommentDate(comment) {
    return (comment.createdAt ||
        comment.commentedAt ||
        comment.timestamp ||
        null);
}
function getRenderJobVersionId(job) {
    return (job?.version?.versionId ??
        job?.assetVersion?.versionId ??
        job?.versionId ??
        null);
}
function DesignerVersionHistoryPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [projects, setProjects] = (0, react_1.useState)([]);
    const [assets, setAssets] = (0, react_1.useState)([]);
    const [versions, setVersions] = (0, react_1.useState)([]);
    const [renderJobs, setRenderJobs] = (0, react_1.useState)([]);
    const [commentsByVersion, setCommentsByVersion] = (0, react_1.useState)({});
    const [projectId, setProjectId] = (0, react_1.useState)('');
    const [assetId, setAssetId] = (0, react_1.useState)('');
    const [statusFilter, setStatusFilter] = (0, react_1.useState)('ALL');
    const [loadingProjects, setLoadingProjects] = (0, react_1.useState)(true);
    const [loadingAssets, setLoadingAssets] = (0, react_1.useState)(false);
    const [loadingVersions, setLoadingVersions] = (0, react_1.useState)(false);
    const [actionLoadingId, setActionLoadingId] = (0, react_1.useState)(null);
    const [downloadingId, setDownloadingId] = (0, react_1.useState)(null);
    const [reviewTarget, setReviewTarget] = (0, react_1.useState)(null);
    const [renderTarget, setRenderTarget] = (0, react_1.useState)(null);
    const [renderPriority, setRenderPriority] = (0, react_1.useState)('NORMAL');
    const [renderSubmitting, setRenderSubmitting] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    const [success, setSuccess] = (0, react_1.useState)('');
    const email = (0, authService_1.getStoredEmail)() || '';
    const designerName = (0, authService_1.getStoredDisplayName)('Designer');
    const selectedProject = (0, react_1.useMemo)(() => projects.find(project => String(project.projectId) ===
        String(projectId)) ||
        null, [
        projects,
        projectId
    ]);
    const selectedAsset = (0, react_1.useMemo)(() => assets.find(asset => String(asset.assetId) ===
        String(assetId)) ||
        null, [
        assets,
        assetId
    ]);
    const filteredVersions = (0, react_1.useMemo)(() => {
        if (statusFilter ===
            'ALL') {
            return versions;
        }
        return versions.filter(version => version.status ===
            statusFilter);
    }, [
        versions,
        statusFilter
    ]);
    const counts = (0, react_1.useMemo)(() => ({
        all: versions.length,
        draft: versions.filter(version => version.status ===
            'DRAFT').length,
        review: versions.filter(version => version.status ===
            'FOR_REVIEW').length,
        revision: versions.filter(version => version.status ===
            'REVISION_REQUESTED').length,
        ready: versions.filter(version => version.status ===
            'RENDER_READY').length
    }), [versions]);
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        (0, designerVersionUploadService_1.loadDesignerVersionProjects)()
            .then(data => {
            if (cancelled) {
                return;
            }
            setProjects(data);
            setError('');
        })
            .catch(err => {
            if (cancelled) {
                return;
            }
            setError(err.message ||
                'Unable to load projects.');
        })
            .finally(() => {
            if (cancelled) {
                return;
            }
            setLoadingProjects(false);
        });
        return () => {
            cancelled =
                true;
        };
    }, []);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    function findRenderJobForVersion(versionId) {
        const matchingJobs = renderJobs.filter(job => String(getRenderJobVersionId(job)) ===
            String(versionId));
        if (matchingJobs.length ===
            0) {
            return null;
        }
        return [...matchingJobs]
            .sort((a, b) => {
            const aTime = new Date(a.submittedAt ||
                a.updatedAt ||
                0).getTime();
            const bTime = new Date(b.submittedAt ||
                b.updatedAt ||
                0).getTime();
            if (bTime !==
                aTime) {
                return (bTime -
                    aTime);
            }
            return (Number(b.renderJobId ||
                0) -
                Number(a.renderJobId ||
                    0));
        })[0];
    }
    async function loadCommentsForVersions(versionList) {
        const entries = await Promise.all(versionList.map(async (version) => {
            try {
                const comments = await (0, designerVersionUploadService_1.loadVersionComments)(version.versionId);
                return [
                    version.versionId,
                    comments
                ];
            }
            catch {
                return [
                    version.versionId,
                    []
                ];
            }
        }));
        setCommentsByVersion(Object.fromEntries(entries));
    }
    async function handleProjectChange(event) {
        const value = event.target.value;
        setProjectId(value);
        setAssetId('');
        setAssets([]);
        setVersions([]);
        setRenderJobs([]);
        setCommentsByVersion({});
        setStatusFilter('ALL');
        setSuccess('');
        setError('');
        if (!value) {
            return;
        }
        try {
            setLoadingAssets(true);
            const [assetData, renderJobData] = await Promise.all([
                (0, designerVersionUploadService_1.loadProjectAssets)(value),
                (0, designerRenderQueueService_1.loadProjectRenderJobs)(value)
            ]);
            setAssets(assetData);
            setRenderJobs(Array.isArray(renderJobData)
                ? renderJobData
                : []);
        }
        catch (err) {
            setError(err.message ||
                'Unable to load project information.');
        }
        finally {
            setLoadingAssets(false);
        }
    }
    async function handleAssetChange(event) {
        const value = event.target.value;
        setAssetId(value);
        setVersions([]);
        setCommentsByVersion({});
        setStatusFilter('ALL');
        setSuccess('');
        setError('');
        if (!value) {
            return;
        }
        try {
            setLoadingVersions(true);
            const data = await (0, designerVersionUploadService_1.loadAssetVersions)(value);
            setVersions(data);
            await loadCommentsForVersions(data);
        }
        catch (err) {
            setError(err.message ||
                'Unable to load versions.');
        }
        finally {
            setLoadingVersions(false);
        }
    }
    function openReviewConfirmation(version) {
        setError('');
        setSuccess('');
        setReviewTarget(version);
    }
    function closeReviewConfirmation() {
        if (actionLoadingId) {
            return;
        }
        setReviewTarget(null);
    }
    async function handleConfirmSubmitReview() {
        if (!reviewTarget) {
            return;
        }
        try {
            setActionLoadingId(reviewTarget.versionId);
            setError('');
            setSuccess('');
            const updatedVersion = await (0, designerVersionUploadService_1.submitVersionForReview)(reviewTarget.versionId);
            setVersions(previous => previous.map(version => version.versionId ===
                updatedVersion.versionId
                ? updatedVersion
                : version));
            setSuccess(`Version ${updatedVersion.versionNumber} was submitted for client review.`);
            setReviewTarget(null);
        }
        catch (err) {
            setError(err.message ||
                'Unable to submit this version for review.');
        }
        finally {
            setActionLoadingId(null);
        }
    }
    function openRenderModal(version) {
        const existingJob = findRenderJobForVersion(version.versionId);
        if (existingJob) {
            setSuccess(`Version ${version.versionNumber} is already in the Render Queue as R-${String(existingJob.renderJobId).padStart(3, '0')}.`);
            return;
        }
        setError('');
        setSuccess('');
        setRenderPriority('NORMAL');
        setRenderTarget(version);
    }
    function closeRenderModal() {
        if (renderSubmitting) {
            return;
        }
        setRenderTarget(null);
        setRenderPriority('NORMAL');
    }
    async function handleSubmitRenderJob() {
        if (!renderTarget ||
            !selectedProject) {
            return;
        }
        const existingJob = findRenderJobForVersion(renderTarget.versionId);
        if (existingJob) {
            setRenderTarget(null);
            setSuccess(`Version ${renderTarget.versionNumber} has already been submitted to the Render Queue.`);
            return;
        }
        try {
            setRenderSubmitting(true);
            setError('');
            setSuccess('');
            const renderJob = await (0, designerRenderQueueService_1.submitRenderJob)({
                projectId: selectedProject.projectId,
                versionId: renderTarget.versionId,
                priority: renderPriority
            });
            setRenderJobs(previous => [
                renderJob,
                ...previous
            ]);
            setSuccess(`Render Job R-${String(renderJob.renderJobId).padStart(3, '0')} submitted successfully. Status: ${formatStatus(renderJob.status)}.`);
            setRenderTarget(null);
            setRenderPriority('NORMAL');
        }
        catch (err) {
            setError(err.message ||
                'Unable to submit the render job.');
        }
        finally {
            setRenderSubmitting(false);
        }
    }
    async function handleDownload(version) {
        try {
            setDownloadingId(version.versionId);
            setError('');
            await (0, designerVersionUploadService_1.downloadAssetVersion)(version);
        }
        catch (err) {
            setError(err.message ||
                'Unable to download this version.');
        }
        finally {
            setDownloadingId(null);
        }
    }
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    const projectDelivered = selectedProject
        ?.status ===
        'DELIVERED';
    const filters = [
        {
            key: 'ALL',
            label: 'All',
            count: counts.all
        },
        {
            key: 'DRAFT',
            label: 'Draft',
            count: counts.draft
        },
        {
            key: 'FOR_REVIEW',
            label: 'For Review',
            count: counts.review
        },
        {
            key: 'REVISION_REQUESTED',
            label: 'Revision Requested',
            count: counts.revision
        },
        {
            key: 'RENDER_READY',
            label: 'Render Ready',
            count: counts.ready
        }
    ];
    return (h("div", { className: "dashboard-page" },
        h(DesignerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, designerName),
                                    h("span", null, email),
                                    h("small", null, "Interior Designer")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "designer-history-main" },
                h("div", { className: "designer-history-heading" },
                    h("div", null,
                        h("p", { className: "designer-history-eyebrow" }, "Version Control"),
                        h("h1", null, "Version History"),
                        h("span", null, "Review asset versions, client feedback, download files, and manage the approval workflow.")),
                    h("button", { type: "button", className: "designer-history-upload-button", onClick: () => navigate('/designer/versions/upload') },
                        h(lucide_react_1.FilePlus2, { size: 17 }),
                        "Upload New Version")),
                error &&
                    (h("div", { className: "designer-history-error" }, error)),
                success &&
                    (h("div", { className: "designer-history-success" },
                        h(lucide_react_1.CheckCircle2, { size: 19 }),
                        h("span", null, success))),
                h("section", { className: "designer-history-selection" },
                    h("div", { className: "designer-history-selection-header" },
                        h("div", null,
                            h("h2", null, "Select Asset"),
                            h("span", null, "Choose one of your assigned projects and its asset.")),
                        h(lucide_react_1.History, { size: 20 })),
                    h("div", { className: "designer-history-selection-fields" },
                        h("div", { className: "designer-history-field" },
                            h("label", { htmlFor: "historyProject" }, "Project"),
                            h("select", { id: "historyProject", value: projectId, onChange: handleProjectChange, disabled: loadingProjects },
                                h("option", { value: "" }, loadingProjects
                                    ? 'Loading projects...'
                                    : 'Select a project'),
                                projects.map(project => (h("option", { key: project.projectId, value: project.projectId },
                                    project.projectName,
                                    project.status ===
                                        'DELIVERED'
                                        ? ' — Delivered'
                                        : ''))))),
                        h("div", { className: "designer-history-field" },
                            h("label", { htmlFor: "historyAsset" }, "Asset"),
                            h("select", { id: "historyAsset", value: assetId, onChange: handleAssetChange, disabled: !projectId ||
                                    loadingAssets },
                                h("option", { value: "" }, loadingAssets
                                    ? 'Loading assets...'
                                    : !projectId
                                        ? 'Select a project first'
                                        : assets.length
                                            ? 'Select an asset'
                                            : 'No assets found'),
                                assets.map(asset => (h("option", { key: asset.assetId, value: asset.assetId }, asset.assetName)))))),
                    selectedAsset &&
                        (h("div", { className: "designer-history-asset-summary" },
                            h("div", null,
                                h("span", null, "Asset"),
                                h("strong", null, selectedAsset.assetName)),
                            h("div", null,
                                h("span", null, "Type"),
                                h("strong", null, formatStatus(selectedAsset.assetType))),
                            h("div", null,
                                h("span", null, "Category"),
                                h("strong", null, formatStatus(selectedAsset.category))),
                            h("div", null,
                                h("span", null, "Project Status"),
                                h("strong", null, formatStatus(selectedProject?.status)))))),
                selectedAsset &&
                    (h("section", { className: "designer-history-panel" },
                        h("div", { className: "designer-history-toolbar" },
                            h("div", null,
                                h("h2", null, selectedAsset.assetName),
                                h("span", null,
                                    versions.length,
                                    " version",
                                    versions.length ===
                                        1
                                        ? ''
                                        : 's',
                                    " available")),
                            h("div", { className: "designer-history-filters" }, filters.map(filter => (h("button", { type: "button", key: filter.key, className: statusFilter ===
                                    filter.key
                                    ? 'designer-history-filter designer-history-filter-active'
                                    : 'designer-history-filter', onClick: () => setStatusFilter(filter.key) },
                                filter.label,
                                h("span", null, filter.count)))))),
                        projectDelivered &&
                            (h("div", { className: "designer-history-delivered-note" }, "This project is already delivered. Version records remain available, but workflow changes are locked.")),
                        loadingVersions
                            ? (h("div", { className: "designer-history-empty" },
                                h(lucide_react_1.RefreshCw, { size: 27 }),
                                h("strong", null, "Loading versions...")))
                            : filteredVersions.length
                                ? (h("div", { className: "designer-history-list" }, filteredVersions.map(version => {
                                    const comments = commentsByVersion[version.versionId] ||
                                        [];
                                    const existingRenderJob = findRenderJobForVersion(version.versionId);
                                    return (h("article", { className: "designer-history-item", key: version.versionId },
                                        h("div", { className: "designer-history-version-icon" },
                                            h("span", null,
                                                "v",
                                                version.versionNumber)),
                                        h("div", { className: "designer-history-content" },
                                            h("div", { className: "designer-history-title-row" },
                                                h("div", null,
                                                    h("strong", null,
                                                        "Version ",
                                                        version.versionNumber),
                                                    h("span", { className: `designer-history-status designer-history-status-${String(version.status ||
                                                            '').toLowerCase()}` }, formatStatus(version.status)),
                                                    existingRenderJob &&
                                                        (h("span", { className: "designer-history-status designer-history-status-render_ready" },
                                                            "Submitted \u00B7 ",
                                                            formatStatus(existingRenderJob.status)))),
                                                h("small", null,
                                                    h(lucide_react_1.Clock3, { size: 13 }),
                                                    formatDateTime(version.uploadedAt))),
                                            h("p", null, version.changeNotes ||
                                                'No revision note provided.'),
                                            h("div", { className: "designer-history-meta" },
                                                h("span", null, "Uploaded by"),
                                                h("strong", null, getUploaderName(version))),
                                            existingRenderJob &&
                                                (h("div", { className: "designer-history-meta" },
                                                    h("span", null, "Render Job"),
                                                    h("strong", null,
                                                        "R-",
                                                        String(existingRenderJob.renderJobId).padStart(3, '0'),
                                                        ' · ',
                                                        formatStatus(existingRenderJob.priority)))),
                                            comments.length >
                                                0 &&
                                                (h("div", { className: "designer-history-feedback" },
                                                    h("div", { className: "designer-history-feedback-header" },
                                                        h(lucide_react_1.MessageCircle, { size: 16 }),
                                                        h("strong", null, "Client Feedback"),
                                                        h("span", null,
                                                            comments.length,
                                                            " comment",
                                                            comments.length ===
                                                                1
                                                                ? ''
                                                                : 's')),
                                                    h("div", { className: "designer-history-feedback-list" }, comments.map((comment, index) => (h("div", { className: "designer-history-feedback-item", key: comment.commentId ||
                                                            `${version.versionId}-${index}` },
                                                        h("div", { className: "designer-history-feedback-meta" },
                                                            h("strong", null, getCommentUser(comment)),
                                                            h("span", null, formatDateTime(getCommentDate(comment)))),
                                                        h("p", null, comment.commentText ||
                                                            'No feedback text available.')))))))),
                                        h("div", { className: "designer-history-actions" },
                                            h("button", { type: "button", className: "designer-history-download", onClick: () => handleDownload(version), disabled: downloadingId ===
                                                    version.versionId },
                                                h(lucide_react_1.Download, { size: 15 }),
                                                downloadingId ===
                                                    version.versionId
                                                    ? 'Downloading...'
                                                    : 'Download'),
                                            version.status ===
                                                'DRAFT' &&
                                                !projectDelivered &&
                                                (h("button", { type: "button", className: "designer-history-submit", onClick: () => openReviewConfirmation(version) },
                                                    h(lucide_react_1.Send, { size: 15 }),
                                                    "Submit for Review")),
                                            version.status ===
                                                'REVISION_REQUESTED' &&
                                                !projectDelivered &&
                                                (h("button", { type: "button", className: "designer-history-revise", onClick: () => navigate('/designer/versions/upload') },
                                                    h(lucide_react_1.FilePlus2, { size: 15 }),
                                                    "Upload Revision")),
                                            version.status ===
                                                'RENDER_READY' &&
                                                !projectDelivered &&
                                                !existingRenderJob &&
                                                (h("button", { type: "button", className: "designer-history-render", onClick: () => openRenderModal(version) },
                                                    h(lucide_react_1.ListChecks, { size: 15 }),
                                                    "Submit to Render Queue")),
                                            existingRenderJob &&
                                                (h("button", { type: "button", className: "designer-history-render", onClick: () => navigate('/designer/render-queue') },
                                                    h(lucide_react_1.ListChecks, { size: 15 }),
                                                    "View Render Job")))));
                                })))
                                : (h("div", { className: "designer-history-empty" },
                                    h(lucide_react_1.FileBox, { size: 29 }),
                                    h("strong", null, "No versions found"),
                                    h("span", null, "There are no versions matching this status."))))),
                !selectedAsset &&
                    (h("section", { className: "designer-history-placeholder" },
                        h(lucide_react_1.History, { size: 33 }),
                        h("strong", null, "Select an asset to view its version history"),
                        h("span", null, "Review versions, client feedback, and approved designs from this page."))))),
        reviewTarget &&
            (h("div", { className: "designer-review-modal-backdrop" },
                h("div", { className: "designer-review-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "submit-review-title" },
                    h("button", { type: "button", className: "designer-review-modal-close", onClick: closeReviewConfirmation, disabled: actionLoadingId ===
                            reviewTarget.versionId, "aria-label": "Close confirmation" },
                        h(lucide_react_1.X, { size: 18 })),
                    h("div", { className: "designer-review-modal-icon" },
                        h(lucide_react_1.Send, { size: 25 })),
                    h("h2", { id: "submit-review-title" },
                        "Submit Version ",
                        reviewTarget.versionNumber,
                        " for Review?"),
                    h("p", null, "This version will be sent to the Client for review. Its status will change from Draft to For Review."),
                    h("div", { className: "designer-review-modal-details" },
                        h("span", null, "Asset"),
                        h("strong", null, selectedAsset?.assetName ||
                            'Selected Asset')),
                    h("div", { className: "designer-review-modal-actions" },
                        h("button", { type: "button", className: "designer-review-cancel", onClick: closeReviewConfirmation, disabled: actionLoadingId ===
                                reviewTarget.versionId }, "Cancel"),
                        h("button", { type: "button", className: "designer-review-confirm", onClick: handleConfirmSubmitReview, disabled: actionLoadingId ===
                                reviewTarget.versionId },
                            h(lucide_react_1.Send, { size: 16 }),
                            actionLoadingId ===
                                reviewTarget.versionId
                                ? 'Submitting...'
                                : 'Submit for Review'))))),
        renderTarget &&
            (h("div", { className: "designer-render-modal-backdrop" },
                h("div", { className: "designer-render-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "render-modal-title" },
                    h("button", { type: "button", className: "designer-render-modal-close", onClick: closeRenderModal, disabled: renderSubmitting, "aria-label": "Close render modal" },
                        h(lucide_react_1.X, { size: 18 })),
                    h("div", { className: "designer-render-modal-icon" },
                        h(lucide_react_1.ListChecks, { size: 25 })),
                    h("div", { className: "designer-render-modal-heading" },
                        h("p", null, "Render Queue"),
                        h("h2", { id: "render-modal-title" }, "Submit to Render Queue"),
                        h("span", null, "Create a render tracking job for this approved design version.")),
                    h("div", { className: "designer-render-modal-summary" },
                        h("div", null,
                            h("span", null, "Project"),
                            h("strong", null, selectedProject?.projectName ||
                                '—')),
                        h("div", null,
                            h("span", null, "Asset"),
                            h("strong", null, selectedAsset?.assetName ||
                                '—')),
                        h("div", null,
                            h("span", null, "Approved Version"),
                            h("strong", null,
                                "v",
                                renderTarget.versionNumber)),
                        h("div", null,
                            h("span", null, "Status"),
                            h("strong", { className: "designer-render-ready-text" }, "Render Ready"))),
                    h("div", { className: "designer-render-priority" },
                        h("label", null, "Priority"),
                        h("div", { className: "designer-render-priority-options" }, [
                            'LOW',
                            'NORMAL',
                            'HIGH'
                        ].map(priority => (h("button", { type: "button", key: priority, className: renderPriority ===
                                priority
                                ? 'designer-render-priority-button designer-render-priority-button-active'
                                : 'designer-render-priority-button', onClick: () => setRenderPriority(priority), disabled: renderSubmitting }, formatStatus(priority)))))),
                    h("div", { className: "designer-render-modal-note" }, "InteriorSync tracks the render job status only. The actual rendering is performed outside the system."),
                    h("div", { className: "designer-render-modal-actions" },
                        h("button", { type: "button", className: "designer-render-cancel", onClick: closeRenderModal, disabled: renderSubmitting }, "Cancel"),
                        h("button", { type: "button", className: "designer-render-confirm", onClick: handleSubmitRenderJob, disabled: renderSubmitting },
                            h(lucide_react_1.ListChecks, { size: 16 }),
                            renderSubmitting
                                ? 'Submitting...'
                                : 'Submit Render Job')))))));
}
exports.default = DesignerVersionHistoryPage;

});
__register("src/pages/LoginPage.jsx",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const authService_1 = require("../services/authService");
require("../styles/LoginPage.css");
function LoginPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    async function handleSubmit(event) {
        event.preventDefault();
        if (!email.trim() ||
            !password) {
            setError('Please enter your email and password.');
            return;
        }
        try {
            setLoading(true);
            setError('');
            const authData = await (0, authService_1.login)(email.trim(), password);
            navigate((0, authService_1.getDefaultRouteForRole)(authData.role), {
                replace: true
            });
        }
        catch (err) {
            setError(err.message ||
                'Unable to login. Please try again.');
        }
        finally {
            setLoading(false);
        }
    }
    return (h("main", { className: "login-page" },
        h("section", { className: "login-visual-panel" },
            h("div", { className: "login-visual-overlay" }),
            h("div", { className: "login-visual-content" },
                h("p", { className: "login-visual-brand" }, "InteriorSync"),
                h("div", { className: "login-visual-message" },
                    h("h1", null, "Welcome to InteriorSync!"),
                    h("p", null, "Design, Review, and Manage Interior Projects in One Place.")))),
        h("section", { className: "login-form-panel" },
            h("div", { className: "login-form-container" },
                h("div", { className: "login-form-heading" },
                    h("p", { className: "login-eyebrow" }, "Welcome Back"),
                    h("h2", null, "Login"),
                    h("span", null, "Enter your account details to continue to InteriorSync.")),
                error &&
                    (h("div", { className: "login-error" }, error)),
                h("form", { className: "login-form", onSubmit: handleSubmit },
                    h("div", { className: "login-field" },
                        h("label", { htmlFor: "email" }, "Email"),
                        h("div", { className: "login-input-wrapper" },
                            h(lucide_react_1.Mail, { size: 19, className: "login-input-icon" }),
                            h("input", { id: "email", type: "email", value: email, onChange: event => setEmail(event.target.value), placeholder: "Enter your email", autoComplete: "email", disabled: loading }))),
                    h("div", { className: "login-field" },
                        h("label", { htmlFor: "password" }, "Password"),
                        h("div", { className: "login-input-wrapper" },
                            h(lucide_react_1.LockKeyhole, { size: 19, className: "login-input-icon" }),
                            h("input", { id: "password", type: showPassword
                                    ? 'text'
                                    : 'password', value: password, onChange: event => setPassword(event.target.value), placeholder: "Enter your password", autoComplete: "current-password", disabled: loading }),
                            h("button", { type: "button", className: "login-password-toggle", onClick: () => setShowPassword(previous => !previous), "aria-label": showPassword
                                    ? 'Hide password'
                                    : 'Show password', disabled: loading }, showPassword
                                ? (h(lucide_react_1.EyeOff, { size: 19 }))
                                : (h(lucide_react_1.Eye, { size: 19 }))))),
                    h("button", { type: "submit", className: "login-submit-button", disabled: loading }, loading
                        ? 'Logging in...'
                        : 'Login')),
                h("p", { className: "login-footer-text" }, "Interior Design Consultation, Asset Library, and Render Queue Management System")))));
}
exports.default = LoginPage;

});
__register("src/pages/NotFoundPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const ErrorState_1 = __importDefault(require("../components/ErrorState"));
const authService_1 = require("../services/authService");
require("../styles/Dashboard.css");
require("../styles/ErrorState.css");
require("../styles/SystemErrorPage.css");
function NotFoundPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    function handleGoBack() {
        navigate(-1);
    }
    function handleGoHome() {
        if ((0, authService_1.isAuthenticated)()) {
            navigate((0, authService_1.getDefaultRouteForRole)(), {
                replace: true
            });
            return;
        }
        navigate('/login', {
            replace: true
        });
    }
    return (h("main", { className: "system-error-page" },
        h("div", { className: "system-error-brand" }, "InteriorSync"),
        h("div", { className: "system-error-container" },
            h(ErrorState_1.default, { type: "notFound", code: "404", title: "Page Not Found", message: "The page or record you are looking for could not be found. It may have been moved, deleted, or the address may be incorrect.", primaryActionLabel: "Go to Dashboard", onPrimaryAction: handleGoHome, secondaryActionLabel: "Go Back", onSecondaryAction: handleGoBack }))));
}
exports.default = NotFoundPage;

});
__register("src/pages/NotificationsPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ClientSidebar_1 = __importDefault(require("../components/ClientSidebar"));
const DesignerSidebar_1 = __importDefault(require("../components/DesignerSidebar"));
const ProjectManagerSidebar_1 = __importDefault(require("../components/ProjectManagerSidebar"));
const authService_1 = require("../services/authService");
const notificationPageService_1 = require("../services/notificationPageService");
require("../styles/Dashboard.css");
require("../styles/NotificationsPage.css");
const ROLE_CONFIG = {
    CLIENT: {
        label: 'Client',
        Sidebar: ClientSidebar_1.default
    },
    INTERIOR_DESIGNER: {
        label: 'Interior Designer',
        Sidebar: DesignerSidebar_1.default
    },
    PROJECT_MANAGER: {
        label: 'Project Manager',
        Sidebar: ProjectManagerSidebar_1.default
    }
};
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function NotificationsPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const role = (0, authService_1.getStoredRole)();
    const roleConfig = ROLE_CONFIG[role] ||
        ROLE_CONFIG.CLIENT;
    const Sidebar = roleConfig.Sidebar;
    const email = (0, authService_1.getStoredEmail)() || '';
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [notifications, setNotifications] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [actionLoading, setActionLoading] = (0, react_1.useState)(false);
    const [selectedFilter, setSelectedFilter] = (0, react_1.useState)('ALL');
    const [searchTerm, setSearchTerm] = (0, react_1.useState)('');
    const [error, setError] = (0, react_1.useState)('');
    const displayName = (0, authService_1.getStoredDisplayName)(roleConfig.label);
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        (0, notificationPageService_1.loadMyNotifications)()
            .then(data => {
            if (cancelled) {
                return;
            }
            setNotifications(data);
            setError('');
        })
            .catch(err => {
            if (cancelled) {
                return;
            }
            if (err.message ===
                'Your session has expired. Please log in again.') {
                navigate('/login', {
                    replace: true
                });
                return;
            }
            setError(err.message ||
                'Unable to load notifications.');
        })
            .finally(() => {
            if (cancelled) {
                return;
            }
            setLoading(false);
        });
        return () => {
            cancelled = true;
        };
    }, [navigate]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const unreadCount = notifications.filter(notification => notification.isRead ===
        false).length;
    const readCount = notifications.filter(notification => notification.isRead ===
        true).length;
    const filteredNotifications = (0, react_1.useMemo)(() => {
        const query = searchTerm
            .trim()
            .toLowerCase();
        return notifications.filter(notification => {
            if (selectedFilter ===
                'UNREAD' &&
                notification.isRead ===
                    true) {
                return false;
            }
            if (selectedFilter ===
                'READ' &&
                notification.isRead ===
                    false) {
                return false;
            }
            if (!query) {
                return true;
            }
            return (notification.title
                ?.toLowerCase()
                .includes(query) ||
                notification.message
                    ?.toLowerCase()
                    .includes(query));
        });
    }, [
        notifications,
        searchTerm,
        selectedFilter
    ]);
    async function handleMarkRead(notification) {
        if (notification.isRead ===
            true) {
            return;
        }
        try {
            setError('');
            await (0, notificationPageService_1.markNotificationRead)(notification.notificationId);
            setNotifications(previous => previous.map(item => item.notificationId ===
                notification.notificationId
                ? {
                    ...item,
                    isRead: true
                }
                : item));
        }
        catch (err) {
            setError(err.message ||
                'Unable to mark notification as read.');
        }
    }
    async function handleMarkAllRead() {
        if (unreadCount === 0) {
            return;
        }
        try {
            setActionLoading(true);
            setError('');
            await (0, notificationPageService_1.markAllNotificationsRead)();
            setNotifications(previous => previous.map(notification => ({
                ...notification,
                isRead: true
            })));
        }
        catch (err) {
            setError(err.message ||
                'Unable to mark all notifications as read.');
        }
        finally {
            setActionLoading(false);
        }
    }
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    const filters = [
        {
            key: 'ALL',
            label: 'All',
            count: notifications.length
        },
        {
            key: 'UNREAD',
            label: 'Unread',
            count: unreadCount
        },
        {
            key: 'READ',
            label: 'Read',
            count: readCount
        }
    ];
    return (h("div", { className: "dashboard-page" },
        h(Sidebar, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("button", { type: "button", className: "topbar-icon-button notification-button", "aria-label": "Notifications" },
                        h(lucide_react_1.Bell, { size: 27 }),
                        unreadCount > 0 &&
                            (h("span", { className: "notification-dot" }, unreadCount > 9
                                ? '9+'
                                : unreadCount))),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, displayName),
                                    h("span", null, email),
                                    h("small", null, roleConfig.label)),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "notifications-main" },
                h("div", { className: "notifications-heading" },
                    h("div", null,
                        h("p", { className: "notifications-eyebrow" }, "Workspace"),
                        h("h1", null, "Notifications"),
                        h("span", null, "View important project updates and activity related to your InteriorSync account.")),
                    h("button", { type: "button", className: "notifications-mark-all", onClick: handleMarkAllRead, disabled: unreadCount === 0 ||
                            actionLoading },
                        h(lucide_react_1.CheckCheck, { size: 17 }),
                        actionLoading
                            ? 'Updating...'
                            : 'Mark All as Read')),
                error &&
                    (h("div", { className: "dashboard-error" }, error)),
                h("section", { className: "notifications-summary" },
                    h("article", { className: "notifications-summary-card" },
                        h("div", { className: "notifications-summary-icon" },
                            h(lucide_react_1.Bell, { size: 21 })),
                        h("div", null,
                            h("span", null, "All Notifications"),
                            h("strong", null, loading
                                ? '—'
                                : notifications.length))),
                    h("article", { className: "notifications-summary-card" },
                        h("div", { className: "notifications-summary-icon" },
                            h(lucide_react_1.Circle, { size: 21 })),
                        h("div", null,
                            h("span", null, "Unread"),
                            h("strong", null, loading
                                ? '—'
                                : unreadCount))),
                    h("article", { className: "notifications-summary-card" },
                        h("div", { className: "notifications-summary-icon" },
                            h(lucide_react_1.MailOpen, { size: 21 })),
                        h("div", null,
                            h("span", null, "Read"),
                            h("strong", null, loading
                                ? '—'
                                : readCount)))),
                h("section", { className: "notifications-panel" },
                    h("div", { className: "notifications-toolbar" },
                        h("div", { className: "notifications-search" },
                            h(lucide_react_1.Search, { size: 18 }),
                            h("input", { type: "text", value: searchTerm, onChange: event => setSearchTerm(event.target.value), placeholder: "Search notifications..." })),
                        h("div", { className: "notifications-filters" }, filters.map(filter => (h("button", { type: "button", key: filter.key, className: selectedFilter ===
                                filter.key
                                ? 'notifications-filter notifications-filter-active'
                                : 'notifications-filter', onClick: () => setSelectedFilter(filter.key) },
                            filter.label,
                            h("span", null, filter.count)))))),
                    h("div", { className: "notifications-list" }, loading
                        ? (h("div", { className: "notifications-empty" },
                            h(lucide_react_1.Bell, { size: 30 }),
                            h("strong", null, "Loading notifications...")))
                        : filteredNotifications.length
                            ? (filteredNotifications.map(notification => (h("article", { className: notification.isRead
                                    ? 'notification-page-item notification-page-read'
                                    : 'notification-page-item notification-page-unread', key: notification.notificationId ||
                                    notification.createdAt },
                                h("div", { className: "notification-page-status" }, notification.isRead
                                    ? (h(lucide_react_1.Check, { size: 17 }))
                                    : (h("span", null))),
                                h("div", { className: "notification-page-content" },
                                    h("div", { className: "notification-page-title-row" },
                                        h("strong", null, notification.title ||
                                            'Notification'),
                                        h("span", null, formatDateTime(notification.createdAt))),
                                    h("p", null, notification.message ||
                                        'No additional details.'),
                                    h("div", { className: "notification-page-footer" },
                                        h("span", { className: notification.isRead
                                                ? 'notification-state notification-state-read'
                                                : 'notification-state notification-state-unread' }, notification.isRead
                                            ? 'Read'
                                            : 'Unread'),
                                        notification.isRead ===
                                            false &&
                                            (h("button", { type: "button", onClick: () => handleMarkRead(notification) },
                                                h(lucide_react_1.Check, { size: 15 }),
                                                "Mark as Read"))))))))
                            : (h("div", { className: "notifications-empty" },
                                h(lucide_react_1.Bell, { size: 32 }),
                                h("strong", null, "No notifications found"),
                                h("span", null, selectedFilter ===
                                    'UNREAD'
                                    ? 'You have no unread notifications.'
                                    : selectedFilter ===
                                        'READ'
                                        ? 'You have no read notifications.'
                                        : 'Notifications will appear here when new activity occurs.')))))))));
}
exports.default = NotificationsPage;

});
__register("src/pages/ProjectManagerActivityPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ProjectManagerSidebar_1 = __importDefault(require("../components/ProjectManagerSidebar"));
const authService_1 = require("../services/authService");
const projectManagerActivityService_1 = require("../services/projectManagerActivityService");
require("../styles/Dashboard.css");
require("../styles/ProjectManagerActivity.css");
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function formatStatus(value) {
    if (!value) {
        return '—';
    }
    return value
        .toLowerCase()
        .split('_')
        .map(word => word.charAt(0)
        .toUpperCase() +
        word.slice(1))
        .join(' ');
}
function getTypeIcon(type) {
    if (type ===
        'PROJECT') {
        return (h(lucide_react_1.Folder, { size: 18 }));
    }
    if (type ===
        'ASSET') {
        return (h(lucide_react_1.Layers3, { size: 18 }));
    }
    if (type ===
        'VERSION') {
        return (h(lucide_react_1.FileClock, { size: 18 }));
    }
    return (h(lucide_react_1.ListChecks, { size: 18 }));
}
function ProjectManagerActivityPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [activities, setActivities] = (0, react_1.useState)([]);
    const [projects, setProjects] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [search, setSearch] = (0, react_1.useState)('');
    const [projectFilter, setProjectFilter] = (0, react_1.useState)('ALL');
    const [typeFilter, setTypeFilter] = (0, react_1.useState)('ALL');
    const [refreshKey, setRefreshKey] = (0, react_1.useState)(0);
    const email = (0, authService_1.getStoredEmail)() || '';
    const managerName = (0, authService_1.getStoredDisplayName)('Project Manager');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        async function loadPage() {
            try {
                setLoading(true);
                const data = await (0, projectManagerActivityService_1.loadProjectManagerActivity)();
                if (cancelled) {
                    return;
                }
                setActivities(data.activities);
                setProjects(data.projects);
                setError('');
            }
            catch (err) {
                if (cancelled) {
                    return;
                }
                setError(err.message ||
                    'Unable to load project activity.');
            }
            finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadPage();
        return () => {
            cancelled =
                true;
        };
    }, [
        refreshKey
    ]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const normalizedSearch = search
        .trim()
        .toLowerCase();
    const filteredActivities = activities.filter(activity => {
        const matchesProject = projectFilter ===
            'ALL' ||
            String(activity.projectId) ===
                projectFilter;
        const matchesType = typeFilter ===
            'ALL' ||
            activity.type ===
                typeFilter;
        const searchText = [
            activity.projectName,
            activity.title,
            activity.details,
            activity.userName,
            activity.status
        ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
        const matchesSearch = !normalizedSearch ||
            searchText.includes(normalizedSearch);
        return (matchesProject &&
            matchesType &&
            matchesSearch);
    });
    const projectCount = activities.filter(activity => activity.type ===
        'PROJECT').length;
    const assetCount = activities.filter(activity => activity.type ===
        'ASSET').length;
    const versionCount = activities.filter(activity => activity.type ===
        'VERSION').length;
    const renderCount = activities.filter(activity => activity.type ===
        'RENDER').length;
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    return (h("div", { className: "dashboard-page" },
        h(ProjectManagerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("button", { type: "button", className: "manager-activity-refresh-top", onClick: () => setRefreshKey(previous => previous + 1), disabled: loading, "aria-label": "Refresh activity" },
                        h(lucide_react_1.RefreshCw, { size: 17 })),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Open profile menu" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, managerName),
                                    h("span", null, email),
                                    h("small", null, "Project Manager")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "manager-activity-main" },
                h("div", { className: "manager-activity-heading" },
                    h("div", null,
                        h("p", null, "Project Monitoring"),
                        h("h1", null, "Project Activity"),
                        h("span", null, "Review project creation, asset uploads, version changes, approvals, revisions, and render activity."))),
                error &&
                    (h("div", { className: "manager-activity-error" }, error)),
                h("section", { className: "manager-activity-stats" },
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Activity, { size: 20 })),
                        h("span", null, "All Activity"),
                        h("strong", null, activities.length)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Folder, { size: 20 })),
                        h("span", null, "Projects"),
                        h("strong", null, projectCount)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Layers3, { size: 20 })),
                        h("span", null, "Assets"),
                        h("strong", null, assetCount)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.FileClock, { size: 20 })),
                        h("span", null, "Versions"),
                        h("strong", null, versionCount)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.ListChecks, { size: 20 })),
                        h("span", null, "Render Activity"),
                        h("strong", null, renderCount))),
                h("section", { className: "manager-activity-card" },
                    h("div", { className: "manager-activity-toolbar" },
                        h("div", { className: "manager-activity-search" },
                            h(lucide_react_1.Search, { size: 17 }),
                            h("input", { type: "text", value: search, placeholder: "Search project activity...", onChange: event => setSearch(event.target.value) })),
                        h("select", { value: projectFilter, onChange: event => setProjectFilter(event.target.value) },
                            h("option", { value: "ALL" }, "All Projects"),
                            projects.map(project => (h("option", { key: project.projectId, value: project.projectId }, project.projectName)))),
                        h("select", { value: typeFilter, onChange: event => setTypeFilter(event.target.value) },
                            h("option", { value: "ALL" }, "All Activity Types"),
                            h("option", { value: "PROJECT" }, "Project"),
                            h("option", { value: "ASSET" }, "Asset"),
                            h("option", { value: "VERSION" }, "Version"),
                            h("option", { value: "RENDER" }, "Render"))),
                    loading
                        ? (h("div", { className: "manager-activity-empty" },
                            h(lucide_react_1.RefreshCw, { size: 26 }),
                            h("strong", null, "Loading project activity...")))
                        : filteredActivities.length ===
                            0
                            ? (h("div", { className: "manager-activity-empty" },
                                h(lucide_react_1.Activity, { size: 30 }),
                                h("strong", null, "No activity found"),
                                h("span", null, "Try changing the selected project, activity type, or search term.")))
                            : (h("div", { className: "manager-activity-table-wrap" },
                                h("table", { className: "manager-activity-table" },
                                    h("thead", null,
                                        h("tr", null,
                                            h("th", null, "Date & Time"),
                                            h("th", null, "Project"),
                                            h("th", null, "Activity"),
                                            h("th", null, "Details"),
                                            h("th", null, "User"),
                                            h("th", null, "Status"),
                                            h("th", null, "Action"))),
                                    h("tbody", null, filteredActivities.map(activity => (h("tr", { key: activity.id },
                                        h("td", { className: "manager-activity-date" }, formatDateTime(activity.timestamp)),
                                        h("td", null,
                                            h("strong", null, activity.projectName),
                                            h("small", null,
                                                "Project #",
                                                activity.projectId)),
                                        h("td", null,
                                            h("div", { className: "manager-activity-type" },
                                                h("span", null, getTypeIcon(activity.type)),
                                                h("strong", null, activity.title))),
                                        h("td", { className: "manager-activity-details" }, activity.details ||
                                            '—'),
                                        h("td", null, activity.userName),
                                        h("td", null,
                                            h("span", { className: "manager-activity-status" }, formatStatus(activity.status))),
                                        h("td", null,
                                            h("button", { type: "button", className: "manager-activity-view", onClick: () => navigate(`/manager/projects/${activity.projectId}`) }, "View Project"))))))))),
                    h("div", { className: "manager-activity-footer" },
                        "Showing ",
                        filteredActivities.length,
                        " of ",
                        activities.length,
                        " activities"))))));
}
exports.default = ProjectManagerActivityPage;

});
__register("src/pages/ProjectManagerConsultationsPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ProjectManagerSidebar_1 = __importDefault(require("../components/ProjectManagerSidebar"));
const authService_1 = require("../services/authService");
const consultationService_1 = require("../services/consultationService");
require("../styles/Dashboard.css");
require("../styles/Consultation.css");
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function formatBudget(budget) {
    if (budget === null ||
        budget === undefined ||
        budget === '') {
        return 'Not provided';
    }
    const amount = Number(budget);
    if (Number.isNaN(amount)) {
        return String(budget);
    }
    return new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        maximumFractionDigits: 2
    }).format(amount);
}
function ProjectManagerConsultationsPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [consultations, setConsultations] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [refreshing, setRefreshing] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    const email = (0, authService_1.getStoredEmail)() || '';
    const managerName = (0, authService_1.getStoredDisplayName)('Project Manager');
    async function loadData(showRefresh = false) {
        try {
            if (showRefresh) {
                setRefreshing(true);
            }
            else {
                setLoading(true);
            }
            const data = await (0, consultationService_1.loadManagerConsultations)();
            setConsultations(data);
            setError('');
        }
        catch (err) {
            if (err.message ===
                'Your session has expired. Please log in again.') {
                navigate('/login', {
                    replace: true
                });
                return;
            }
            setError(err.message ||
                'Unable to load Client consultations.');
        }
        finally {
            setLoading(false);
            setRefreshing(false);
        }
    }
    (0, react_1.useEffect)(() => {
        loadData();
    }, []);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    const pendingCount = consultations.filter(consultation => consultation.status ===
        'NEW').length;
    const createdCount = consultations.filter(consultation => consultation.status ===
        'PROJECT_CREATED').length;
    return (h("div", { className: "dashboard-page" },
        h(ProjectManagerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Open profile menu" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, managerName),
                                    h("span", null, email),
                                    h("small", null, "Project Manager")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "consultation-main" },
                h("div", { className: "consultation-heading consultation-heading-row" },
                    h("div", null,
                        h("p", null, "Project Intake"),
                        h("h1", null, "Client Consultations"),
                        h("span", null, "Review submitted Client requirements and create projects only from pending consultations.")),
                    h("button", { type: "button", className: "consultation-secondary-button", disabled: refreshing, onClick: () => loadData(true) },
                        h(lucide_react_1.RefreshCw, { size: 16 }),
                        refreshing
                            ? 'Refreshing...'
                            : 'Refresh')),
                error &&
                    (h("div", { className: "consultation-alert consultation-alert-error" }, error)),
                h("div", { className: "consultation-summary-grid" },
                    h("article", { className: "consultation-summary-card" },
                        h("span", null, "Total Consultations"),
                        h("strong", null, consultations.length)),
                    h("article", { className: "consultation-summary-card" },
                        h("span", null, "Pending Project Creation"),
                        h("strong", null, pendingCount)),
                    h("article", { className: "consultation-summary-card" },
                        h("span", null, "Projects Created"),
                        h("strong", null, createdCount))),
                h("section", { className: "consultation-card" },
                    h("div", { className: "consultation-card-header" },
                        h("div", null,
                            h("h2", null, "Submitted Consultations"),
                            h("span", null, "A consultation can be used to create only one project.")),
                        h(lucide_react_1.ClipboardList, { size: 20 })),
                    h("div", { className: "consultation-manager-list" }, loading
                        ? (h("div", { className: "consultation-empty consultation-empty-large" }, "Loading Client consultations..."))
                        : consultations.length === 0
                            ? (h("div", { className: "consultation-empty consultation-empty-large" }, "No Client consultations have been submitted yet."))
                            : consultations.map(consultation => (h("article", { className: "consultation-manager-item", key: consultation.consultationId },
                                h("div", { className: "consultation-manager-top" },
                                    h("div", null,
                                        h("small", null,
                                            "Consultation #",
                                            consultation.consultationId),
                                        h("h3", null, consultation.clientName),
                                        h("span", null, consultation.clientEmail)),
                                    h("span", { className: consultation.status === 'PROJECT_CREATED'
                                            ? 'consultation-status consultation-status-created'
                                            : 'consultation-status consultation-status-new' }, consultation.status === 'PROJECT_CREATED'
                                        ? 'Project Created'
                                        : 'Pending')),
                                h("div", { className: "consultation-manager-details" },
                                    h("div", { className: "consultation-detail-full" },
                                        h("small", null, "Project Requirements"),
                                        h("p", null, consultation.requirements || '—')),
                                    h("div", null,
                                        h("small", null, "Budget"),
                                        h("strong", null, formatBudget(consultation.budget))),
                                    h("div", null,
                                        h("small", null, "Timeline"),
                                        h("strong", null, consultation.timeline || '—')),
                                    h("div", null,
                                        h("small", null, "Space Information"),
                                        h("p", null, consultation.spaceInformation || '—')),
                                    h("div", null,
                                        h("small", null, "Style Preferences"),
                                        h("p", null, consultation.stylePreferences || '—')),
                                    h("div", { className: "consultation-detail-full" },
                                        h("small", null, "References"),
                                        h("p", null, consultation.references || 'No references provided.'))),
                                h("div", { className: "consultation-manager-footer" },
                                    h("span", null,
                                        "Submitted ",
                                        formatDateTime(consultation.createdAt)),
                                    consultation.status === 'NEW' &&
                                        (h("button", { type: "button", className: "consultation-primary-button", onClick: () => navigate(`/manager/projects/create?consultationId=${consultation.consultationId}`) },
                                            h(lucide_react_1.FolderPlus, { size: 16 }),
                                            "Create Project"))))))))))));
}
exports.default = ProjectManagerConsultationsPage;

});
__register("src/pages/ProjectManagerCreateProjectPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ProjectManagerSidebar_1 = __importDefault(require("../components/ProjectManagerSidebar"));
const authService_1 = require("../services/authService");
const projectManagerProjectService_1 = require("../services/projectManagerProjectService");
require("../styles/Dashboard.css");
require("../styles/ProjectManagerCreateProject.css");
require("../styles/Consultation.css");
function formatBudget(budget) {
    if (budget === null ||
        budget === undefined ||
        budget === '') {
        return 'Not provided';
    }
    const amount = Number(budget);
    if (Number.isNaN(amount)) {
        return String(budget);
    }
    return new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        maximumFractionDigits: 2
    }).format(amount);
}
function ProjectManagerCreateProjectPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [searchParams] = (0, react_router_dom_1.useSearchParams)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [consultations, setConsultations] = (0, react_1.useState)([]);
    const [designers, setDesigners] = (0, react_1.useState)([]);
    const [loadingOptions, setLoadingOptions] = (0, react_1.useState)(true);
    const [submitting, setSubmitting] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    const [success, setSuccess] = (0, react_1.useState)('');
    const [createdProject, setCreatedProject] = (0, react_1.useState)(null);
    const [form, setForm] = (0, react_1.useState)({
        consultationId: '',
        projectName: '',
        designerUserId: '',
        description: ''
    });
    const email = (0, authService_1.getStoredEmail)() || '';
    const managerName = (0, authService_1.getStoredDisplayName)('Project Manager');
    async function loadOptions() {
        try {
            setLoadingOptions(true);
            const data = await (0, projectManagerProjectService_1.loadCreateProjectOptions)();
            setConsultations(data.consultations);
            setDesigners(data.designers);
            const requestedId = searchParams.get('consultationId');
            if (requestedId) {
                const requestedConsultation = data.consultations.find(consultation => String(consultation.consultationId) ===
                    String(requestedId));
                if (requestedConsultation) {
                    setForm(previous => ({
                        ...previous,
                        consultationId: String(requestedConsultation.consultationId),
                        description: previous.description ||
                            requestedConsultation.requirements?.slice(0, 1500) ||
                            ''
                    }));
                }
            }
            setError('');
        }
        catch (err) {
            if (err.message ===
                'Your session has expired. Please log in again.') {
                navigate('/login', {
                    replace: true
                });
                return;
            }
            setError(err.message ||
                'Unable to load consultations and Interior Designer options.');
        }
        finally {
            setLoadingOptions(false);
        }
    }
    (0, react_1.useEffect)(() => {
        loadOptions();
    }, []);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const selectedConsultation = consultations.find(consultation => String(consultation.consultationId) ===
        String(form.consultationId));
    const selectedDesigner = designers.find(designer => String(designer.userId) ===
        String(form.designerUserId));
    function updateField(field, value) {
        setForm(previous => ({
            ...previous,
            [field]: value
        }));
        setError('');
        setSuccess('');
        setCreatedProject(null);
    }
    function handleConsultationChange(value) {
        const consultation = consultations.find(item => String(item.consultationId) ===
            String(value));
        setForm(previous => ({
            ...previous,
            consultationId: value,
            description: previous.description.trim()
                ? previous.description
                : consultation?.requirements?.slice(0, 1500) ||
                    ''
        }));
        setError('');
        setSuccess('');
        setCreatedProject(null);
    }
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    async function handleCreateAnother() {
        setForm({
            consultationId: '',
            projectName: '',
            designerUserId: '',
            description: ''
        });
        setSuccess('');
        setError('');
        setCreatedProject(null);
        await loadOptions();
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const projectName = form.projectName.trim();
        const description = form.description.trim();
        if (!form.consultationId) {
            setError('Please select a pending Client consultation.');
            return;
        }
        if (!selectedConsultation) {
            setError('The selected consultation is no longer available.');
            return;
        }
        if (!projectName) {
            setError('Project Name is required.');
            return;
        }
        if (!form.designerUserId) {
            setError('Please select an Interior Designer.');
            return;
        }
        if (!description) {
            setError('Project Description is required.');
            return;
        }
        try {
            setSubmitting(true);
            setError('');
            setSuccess('');
            const project = await (0, projectManagerProjectService_1.createManagerProject)({
                clientId: selectedConsultation.clientId,
                consultationId: selectedConsultation.consultationId,
                designerUserId: form.designerUserId,
                projectName,
                description
            });
            setCreatedProject(project);
            setConsultations(previous => previous.filter(consultation => consultation.consultationId !==
                selectedConsultation.consultationId));
            setSuccess('Project created successfully from the Client consultation. The Project Manager and selected Interior Designer are assigned.');
        }
        catch (err) {
            setError(err.message ||
                'Unable to create the project.');
        }
        finally {
            setSubmitting(false);
        }
    }
    return (h("div", { className: "dashboard-page" },
        h(ProjectManagerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Open profile menu" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, managerName),
                                    h("span", null, email),
                                    h("small", null, "Project Manager")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "manager-create-main" },
                h("button", { type: "button", className: "manager-create-back", onClick: () => navigate('/manager/consultations') },
                    h(lucide_react_1.ArrowLeft, { size: 16 }),
                    "Consultations"),
                h("div", { className: "manager-create-heading" },
                    h("div", null,
                        h("p", null, "Project Management"),
                        h("h1", null, "Create Project"),
                        h("span", null, "Create a project from a submitted Client consultation and assign an Interior Designer."))),
                error &&
                    (h("div", { className: "manager-create-error" }, error)),
                success &&
                    (h("div", { className: "manager-create-success" },
                        h(lucide_react_1.CheckCircle2, { size: 18 }),
                        h("div", null,
                            h("strong", null, "Project Created Successfully"),
                            h("span", null, success)))),
                createdProject
                    ? (h("section", { className: "manager-created-project-card" },
                        h("div", { className: "manager-created-project-icon" },
                            h(lucide_react_1.CheckCircle2, { size: 32 })),
                        h("p", null, "New Project"),
                        h("h2", null, createdProject.projectName),
                        h("span", null,
                            "Project #",
                            createdProject.projectId,
                            " is now active and ready for the Designer workflow."),
                        h("div", { className: "manager-created-project-actions" },
                            h("button", { type: "button", className: "manager-create-secondary-button", onClick: handleCreateAnother },
                                h(lucide_react_1.FolderPlus, { size: 16 }),
                                "Create Another"),
                            h("button", { type: "button", className: "manager-create-primary-button", onClick: () => navigate(`/manager/projects/${createdProject.projectId}`) }, "View Project"))))
                    : (h("form", { className: "manager-create-layout", onSubmit: handleSubmit },
                        h("section", { className: "manager-create-form-card" },
                            h("div", { className: "manager-create-card-heading" },
                                h("div", null,
                                    h("h2", null, "Project Information"),
                                    h("span", null, "Select the Client consultation that will serve as the basis of this project.")),
                                h(lucide_react_1.ClipboardList, { size: 21 })),
                            h("div", { className: "manager-create-form-body" },
                                h("label", { className: "manager-create-field manager-create-field-full" },
                                    h("span", null, "Client Consultation *"),
                                    h("select", { value: form.consultationId, disabled: loadingOptions, onChange: event => handleConsultationChange(event.target.value) },
                                        h("option", { value: "" }, loadingOptions
                                            ? 'Loading Consultations...'
                                            : 'Select a Pending Consultation'),
                                        consultations.map(consultation => (h("option", { key: consultation.consultationId, value: consultation.consultationId },
                                            "#",
                                            consultation.consultationId,
                                            " \u00B7 ",
                                            consultation.clientName,
                                            " \u00B7 ",
                                            consultation.clientEmail))))),
                                selectedConsultation &&
                                    (h("div", { className: "manager-create-field manager-create-field-full" },
                                        h("div", { className: "consultation-source-card" },
                                            h("h3", null, "Consultation Summary"),
                                            h("div", { className: "consultation-source-grid" },
                                                h("div", null,
                                                    h("small", null, "Client"),
                                                    h("strong", null, selectedConsultation.clientName)),
                                                h("div", null,
                                                    h("small", null, "Budget"),
                                                    h("strong", null, formatBudget(selectedConsultation.budget))),
                                                h("div", null,
                                                    h("small", null, "Timeline"),
                                                    h("strong", null, selectedConsultation.timeline || '—')),
                                                h("div", null,
                                                    h("small", null, "Style"),
                                                    h("strong", null, selectedConsultation.stylePreferences || '—')),
                                                h("div", { className: "consultation-source-full" },
                                                    h("small", null, "Requirements"),
                                                    h("p", null, selectedConsultation.requirements || '—')),
                                                h("div", { className: "consultation-source-full" },
                                                    h("small", null, "Space Information"),
                                                    h("p", null, selectedConsultation.spaceInformation || '—')))))),
                                h("label", { className: "manager-create-field manager-create-field-full" },
                                    h("span", null, "Project Name *"),
                                    h("input", { type: "text", value: form.projectName, placeholder: "Example: Modern Living Room Project", maxLength: 150, onChange: event => updateField('projectName', event.target.value) })),
                                h("label", { className: "manager-create-field manager-create-field-full" },
                                    h("span", null, "Interior Designer *"),
                                    h("select", { value: form.designerUserId, disabled: loadingOptions, onChange: event => updateField('designerUserId', event.target.value) },
                                        h("option", { value: "" }, loadingOptions
                                            ? 'Loading Designers...'
                                            : 'Select an Interior Designer'),
                                        designers.map(designer => (h("option", { key: designer.userId, value: designer.userId },
                                            designer.name,
                                            " \u00B7 ",
                                            designer.email))))),
                                h("label", { className: "manager-create-field manager-create-field-full" },
                                    h("span", null, "Project Description *"),
                                    h("textarea", { value: form.description, placeholder: "Summarize the project scope and expected output.", rows: 7, maxLength: 1500, onChange: event => updateField('description', event.target.value) }),
                                    h("small", null,
                                        form.description.length,
                                        " / 1500")))),
                        h("aside", { className: "manager-create-side" },
                            h("section", { className: "manager-create-assignment-card" },
                                h("div", { className: "manager-create-card-heading" },
                                    h("div", null,
                                        h("h2", null, "Assignment Summary"),
                                        h("span", null, "Review the project participants before creating the project.")),
                                    h(lucide_react_1.UsersRound, { size: 21 })),
                                h("div", { className: "manager-create-assignment-body" },
                                    h("div", { className: "manager-create-assignment-row" },
                                        h("div", null,
                                            h(lucide_react_1.UserRound, { size: 20 })),
                                        h("span", null,
                                            h("small", null, "Client"),
                                            h("strong", null, selectedConsultation?.clientName || 'Not selected'),
                                            h("em", null, selectedConsultation?.clientEmail || 'Select a consultation'))),
                                    h("div", { className: "manager-create-assignment-row" },
                                        h("div", null,
                                            h(lucide_react_1.UserRound, { size: 20 })),
                                        h("span", null,
                                            h("small", null, "Interior Designer"),
                                            h("strong", null, selectedDesigner?.name || 'Not selected'),
                                            h("em", null, selectedDesigner?.email || 'Choose a Designer'))),
                                    h("div", { className: "manager-create-assignment-row" },
                                        h("div", null,
                                            h(lucide_react_1.UserCircle, { size: 20 })),
                                        h("span", null,
                                            h("small", null, "Project Manager"),
                                            h("strong", null, managerName),
                                            h("em", null, "Automatically assigned"))))),
                            h("section", { className: "manager-create-behavior-card" },
                                h("strong", null, "Creation behavior"),
                                h("p", null, "A project can only be created from a pending Client consultation. After successful creation, the consultation becomes PROJECT_CREATED and cannot be reused for another project.")),
                            !loadingOptions &&
                                consultations.length === 0 &&
                                (h("section", { className: "manager-create-warning-card" }, "No pending Client consultations are available. Ask the Client to submit a consultation first.")),
                            !loadingOptions &&
                                designers.length === 0 &&
                                (h("section", { className: "manager-create-warning-card" }, "No active Interior Designer accounts are available for assignment.")),
                            h("div", { className: "manager-create-actions" },
                                h("button", { type: "button", className: "manager-create-cancel-button", disabled: submitting, onClick: () => navigate('/manager/consultations') }, "Cancel"),
                                h("button", { type: "submit", className: "manager-create-submit-button", disabled: submitting ||
                                        loadingOptions ||
                                        consultations.length === 0 ||
                                        designers.length === 0 },
                                    h(lucide_react_1.FolderPlus, { size: 17 }),
                                    submitting
                                        ? 'Creating...'
                                        : 'Create Project')))))))));
}
exports.default = ProjectManagerCreateProjectPage;

});
__register("src/pages/ProjectManagerDashboard.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ProjectManagerSidebar_1 = __importDefault(require("../components/ProjectManagerSidebar"));
const authService_1 = require("../services/authService");
const projectManagerDashboardService_1 = require("../services/projectManagerDashboardService");
require("../styles/Dashboard.css");
require("../styles/ProjectManagerDashboard.css");
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function formatStatus(value) {
    if (!value) {
        return 'Unknown';
    }
    return value
        .replaceAll('_', ' ')
        .toLowerCase()
        .replace(/\b\w/g, character => character.toUpperCase());
}
function getUserName(user) {
    if (!user) {
        return 'Not assigned';
    }
    const name = `${user.firstName || ''} ${user.lastName || ''}`
        .trim();
    return (name ||
        user.email ||
        'Unknown User');
}
function ProjectManagerDashboard() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [dashboardData, setDashboardData] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const email = (0, authService_1.getStoredEmail)() || '';
    const managerName = (0, authService_1.getStoredDisplayName)('Project Manager');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        (0, projectManagerDashboardService_1.loadProjectManagerDashboard)()
            .then(data => {
            if (cancelled) {
                return;
            }
            setDashboardData(data);
            setError('');
        })
            .catch(err => {
            if (cancelled) {
                return;
            }
            if (err.message ===
                'Your session has expired. Please log in again.') {
                navigate('/login', {
                    replace: true
                });
                return;
            }
            setError(err.message ||
                'Unable to load Project Manager dashboard.');
        })
            .finally(() => {
            if (cancelled) {
                return;
            }
            setLoading(false);
        });
        return () => {
            cancelled = true;
        };
    }, [navigate]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    const counts = dashboardData?.counts || {
        activeProjects: 0,
        assignedDesigners: 0,
        assignedClients: 0,
        submittedAssets: 0,
        pendingReviews: 0,
        approvedDesigns: 0,
        renderJobs: 0
    };
    const stats = [
        {
            label: 'Active Projects',
            value: counts.activeProjects,
            icon: lucide_react_1.BriefcaseBusiness
        },
        {
            label: 'Assigned Designers',
            value: counts.assignedDesigners,
            icon: lucide_react_1.Users
        },
        {
            label: 'Assigned Clients',
            value: counts.assignedClients,
            icon: lucide_react_1.UserCircle
        },
        {
            label: 'Submitted Assets',
            value: counts.submittedAssets,
            icon: lucide_react_1.Boxes
        },
        {
            label: 'Pending Reviews',
            value: counts.pendingReviews,
            icon: lucide_react_1.RefreshCw
        },
        {
            label: 'Approved Designs',
            value: counts.approvedDesigns,
            icon: lucide_react_1.CheckCircle2
        },
        {
            label: 'Render Jobs',
            value: counts.renderJobs,
            icon: lucide_react_1.ListChecks
        }
    ];
    return (h("div", { className: "dashboard-page" },
        h(ProjectManagerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("button", { type: "button", className: "topbar-icon-button notification-button", "aria-label": "Notifications" },
                        h(lucide_react_1.Bell, { size: 27 }),
                        dashboardData
                            ?.unreadCount > 0 &&
                            (h("span", { className: "notification-dot" }, dashboardData
                                .unreadCount > 9
                                ? '9+'
                                : dashboardData
                                    .unreadCount))),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, managerName),
                                    h("span", null, email),
                                    h("small", null, "Project Manager")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "pm-dashboard-main" },
                error &&
                    (h("div", { className: "dashboard-error" }, error)),
                h("section", { className: "pm-welcome-banner" },
                    h("div", { className: "pm-welcome-overlay" }),
                    h("div", { className: "pm-welcome-content" },
                        h("p", null, "Project Management Workspace"),
                        h("h1", null,
                            "Welcome, ",
                            managerName),
                        h("span", null, "Monitor projects, assigned users, design reviews, approvals, and render production."))),
                h("section", { className: "pm-stats-grid" }, stats.map(stat => {
                    const Icon = stat.icon;
                    return (h("article", { className: "pm-stat-card", key: stat.label },
                        h("div", { className: "pm-stat-icon" },
                            h(Icon, { size: 21 })),
                        h("div", null,
                            h("span", null, stat.label),
                            h("strong", null, loading
                                ? '—'
                                : stat.value))));
                })),
                h("section", { className: "pm-dashboard-grid" },
                    h("article", { className: "pm-dashboard-panel pm-project-panel" },
                        h("div", { className: "pm-panel-header" },
                            h("div", null,
                                h("h2", null, "Project Overview"),
                                h("span", null, "Current projects and assignments.")),
                            h(lucide_react_1.Folder, { size: 20 })),
                        h("div", { className: "pm-project-list" }, loading
                            ? (h("div", { className: "pm-panel-state" }, "Loading projects..."))
                            : dashboardData
                                ?.projects
                                ?.length
                                ? (dashboardData.projects
                                    .slice(0, 5)
                                    .map(project => (h("div", { className: "pm-project-row", key: project.projectId },
                                    h("div", { className: "pm-project-icon" },
                                        h(lucide_react_1.Folder, { size: 18 })),
                                    h("div", { className: "pm-project-info" },
                                        h("strong", null, project.projectName),
                                        h("span", null,
                                            "Client: ",
                                            getUserName(project.client)),
                                        h("small", null, project.designers.length
                                            ? `Designer: ${project.designers
                                                .map(getUserName)
                                                .join(', ')}`
                                            : 'Designer: Not assigned')),
                                    h("div", { className: "pm-project-summary" },
                                        h("span", { className: project.status ===
                                                'DELIVERED'
                                                ? 'pm-project-status pm-project-status-delivered'
                                                : 'pm-project-status' }, formatStatus(project.status)),
                                        h("small", null,
                                            project.assetCount,
                                            " assets"))))))
                                : (h("div", { className: "pm-panel-state" },
                                    h(lucide_react_1.Folder, { size: 27 }),
                                    h("span", null, "No projects available."))))),
                    h("article", { className: "pm-dashboard-panel" },
                        h("div", { className: "pm-panel-header" },
                            h("div", null,
                                h("h2", null, "Project Activity"),
                                h("span", null, "Latest workflow activity.")),
                            h(lucide_react_1.ClipboardCheck, { size: 20 })),
                        h("div", { className: "pm-activity-list" }, loading
                            ? (h("div", { className: "pm-panel-state" }, "Loading activity..."))
                            : dashboardData
                                ?.recentActivity
                                ?.length
                                ? (dashboardData
                                    .recentActivity
                                    .map(activity => (h("div", { className: "pm-activity-row", key: activity.id },
                                    h("div", { className: "pm-activity-icon" },
                                        h(lucide_react_1.Layers3, { size: 17 })),
                                    h("div", { className: "pm-activity-info" },
                                        h("strong", null, activity.title),
                                        h("span", null, activity.message),
                                        h("small", null, formatDateTime(activity.timestamp)))))))
                                : (h("div", { className: "pm-panel-state" }, "No project activity.")))),
                    h("article", { className: "pm-dashboard-panel" },
                        h("div", { className: "pm-panel-header" },
                            h("div", null,
                                h("h2", null, "Notifications"),
                                h("span", null, "Latest project updates.")),
                            h(lucide_react_1.Bell, { size: 20 })),
                        h("div", { className: "pm-notification-list" }, loading
                            ? (h("div", { className: "pm-panel-state" }, "Loading notifications..."))
                            : dashboardData
                                ?.notifications
                                ?.length
                                ? (dashboardData
                                    .notifications
                                    .map(notification => (h("div", { className: notification.isRead
                                        ? 'pm-notification-row'
                                        : 'pm-notification-row pm-notification-unread', key: notification.notificationId },
                                    h("div", { className: "pm-notification-dot" }),
                                    h("div", { className: "pm-notification-info" },
                                        h("strong", null, notification.title),
                                        h("span", null, notification.message),
                                        h("small", null, formatDateTime(notification.createdAt)))))))
                                : (h("div", { className: "pm-panel-state" },
                                    h(lucide_react_1.Bell, { size: 27 }),
                                    h("span", null, "No notifications."))))))))));
}
exports.default = ProjectManagerDashboard;

});
__register("src/pages/ProjectManagerProjectDetailsPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ProjectManagerSidebar_1 = __importDefault(require("../components/ProjectManagerSidebar"));
const authService_1 = require("../services/authService");
const projectManagerProjectService_1 = require("../services/projectManagerProjectService");
require("../styles/Dashboard.css");
require("../styles/ProjectManagerProjectDetails.css");
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function formatWorkflowStatus(value) {
    switch (value) {
        case 'DRAFT':
            return 'Draft';
        case 'FOR_REVIEW':
            return 'For Review';
        case 'REVISION_REQUESTED':
            return 'Revision Requested';
        case 'APPROVED':
            return 'Render Ready';
        case 'RENDERING':
            return 'Rendering';
        case 'COMPLETED':
            return 'Completed';
        case 'FAILED':
            return 'Failed';
        default:
            return value || 'Unknown';
    }
}
function ProjectManagerProjectDetailsPage() {
    const { projectId } = (0, react_router_dom_1.useParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [projectData, setProjectData] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [delivering, setDelivering] = (0, react_1.useState)(false);
    const [showDeliverModal, setShowDeliverModal] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    const [success, setSuccess] = (0, react_1.useState)('');
    const email = (0, authService_1.getStoredEmail)() || '';
    const managerName = (0, authService_1.getStoredDisplayName)('Project Manager');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        async function loadProject() {
            try {
                const data = await (0, projectManagerProjectService_1.loadManagerProjectDetails)(projectId);
                if (cancelled) {
                    return;
                }
                setProjectData(data);
                setError('');
            }
            catch (err) {
                if (cancelled) {
                    return;
                }
                setError(err.message ||
                    'Unable to load project details.');
            }
            finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadProject();
        return () => {
            cancelled =
                true;
        };
    }, [
        projectId
    ]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    async function handleDeliverProject() {
        try {
            setDelivering(true);
            setError('');
            setSuccess('');
            await (0, projectManagerProjectService_1.deliverManagerProject)(projectId);
            const updatedProject = await (0, projectManagerProjectService_1.loadManagerProjectDetails)(projectId);
            setProjectData(updatedProject);
            setShowDeliverModal(false);
            setSuccess('Project delivered successfully. The Client has been notified.');
        }
        catch (err) {
            setShowDeliverModal(false);
            setError(err.message ||
                'Unable to deliver this project.');
        }
        finally {
            setDelivering(false);
        }
    }
    if (loading) {
        return (h("div", { className: "dashboard-page" },
            h(ProjectManagerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
            h("div", { className: "dashboard-content" },
                h("div", { className: "manager-project-detail-loading" }, "Loading project..."))));
    }
    if (!projectData) {
        return (h("div", { className: "dashboard-page" },
            h(ProjectManagerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
            h("div", { className: "dashboard-content" },
                h("div", { className: "manager-project-detail-loading" }, error ||
                    'Project not found.'))));
    }
    const delivered = projectData.projectStatus ===
        'DELIVERED';
    const renderCompleted = projectData
        .latestRenderJob
        ?.status ===
        'COMPLETED';
    const hasFinalOutput = Boolean(projectData.latestOutput);
    const readyForDelivery = !delivered &&
        renderCompleted &&
        hasFinalOutput;
    return (h("div", { className: "dashboard-page" },
        h(ProjectManagerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Open profile menu" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, managerName),
                                    h("span", null, email),
                                    h("small", null, "Project Manager")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "manager-project-detail-main" },
                h("button", { type: "button", className: "manager-project-back", onClick: () => navigate('/manager/projects') },
                    h(lucide_react_1.ArrowLeft, { size: 16 }),
                    "Projects"),
                h("div", { className: "manager-project-detail-heading" },
                    h("div", null,
                        h("p", null, "Project Workspace"),
                        h("h1", null, projectData.projectName),
                        h("span", null, "Monitor assignments, design progress, rendering, and project delivery.")),
                    delivered
                        ? (h("span", { className: "manager-project-delivered-badge" },
                            h(lucide_react_1.CheckCircle2, { size: 15 }),
                            "Delivered"))
                        : (h("button", { type: "button", className: "manager-project-deliver-button", disabled: !readyForDelivery, onClick: () => setShowDeliverModal(true) },
                            h(lucide_react_1.PackageCheck, { size: 17 }),
                            "Deliver Project"))),
                error &&
                    (h("div", { className: "manager-project-detail-error" }, error)),
                success &&
                    (h("div", { className: "manager-project-detail-success" },
                        h(lucide_react_1.CheckCircle2, { size: 18 }),
                        success)),
                h("section", { className: "manager-project-summary" },
                    h("div", null,
                        h("span", null, "Client"),
                        h("strong", null,
                            h(lucide_react_1.UserRound, { size: 16 }),
                            projectData.clientName)),
                    h("div", null,
                        h("span", null, "Assigned Designer"),
                        h("strong", null,
                            h(lucide_react_1.UserRound, { size: 16 }),
                            projectData.designerName)),
                    h("div", null,
                        h("span", null, "Project Manager"),
                        h("strong", null,
                            h(lucide_react_1.UserRound, { size: 16 }),
                            projectData.projectManagerName)),
                    h("div", null,
                        h("span", null, "Workflow Status"),
                        h("strong", null, delivered
                            ? 'Delivered'
                            : formatWorkflowStatus(projectData.workflowStatus)))),
                h("section", { className: "manager-project-detail-stats" },
                    h("article", null,
                        h(lucide_react_1.Folder, { size: 22 }),
                        h("div", null,
                            h("span", null, "Assets"),
                            h("strong", null, projectData
                                .assets
                                .length))),
                    h("article", null,
                        h(lucide_react_1.Layers3, { size: 22 }),
                        h("div", null,
                            h("span", null, "Versions"),
                            h("strong", null, projectData
                                .versions
                                .length))),
                    h("article", null,
                        h(lucide_react_1.FileCheck2, { size: 22 }),
                        h("div", null,
                            h("span", null, "Render Jobs"),
                            h("strong", null, projectData
                                .renderJobs
                                .length))),
                    h("article", null,
                        h(lucide_react_1.PackageCheck, { size: 22 }),
                        h("div", null,
                            h("span", null, "Final Output"),
                            h("strong", null, hasFinalOutput
                                ? 'Available'
                                : 'Not Available')))),
                h("section", { className: "manager-project-detail-grid" },
                    h("article", { className: "manager-project-information-card" },
                        h("h2", null, "Project Information"),
                        h("div", null,
                            h("span", null, "Description"),
                            h("p", null, projectData.description ||
                                'No project description provided.')),
                        h("div", null,
                            h("span", null, "Created"),
                            h("strong", null, formatDateTime(projectData.createdAt))),
                        h("div", null,
                            h("span", null, "Backend Project Status"),
                            h("strong", null, projectData.projectStatus))),
                    h("article", { className: "manager-project-workflow-card" },
                        h("h2", null, "Delivery Readiness"),
                        h("div", { className: "manager-readiness-row" },
                            h("span", null, "Latest Approved Version"),
                            h("strong", null, projectData
                                .latestVersion
                                ? `v${projectData.latestVersion.versionNumber} · ${projectData.latestVersion.status}`
                                : 'No version')),
                        h("div", { className: "manager-readiness-row" },
                            h("span", null, "Latest Render Job"),
                            h("strong", null, projectData
                                .latestRenderJob
                                ? `R-${String(projectData.latestRenderJob.renderJobId).padStart(3, '0')} · ${projectData.latestRenderJob.status}`
                                : 'No render job')),
                        h("div", { className: "manager-readiness-row" },
                            h("span", null, "Final Output"),
                            h("strong", null, hasFinalOutput
                                ? 'Available'
                                : 'Not Available')),
                        h("div", { className: "manager-readiness-message" }, delivered
                            ? (h(Fragment, null,
                                h(lucide_react_1.CheckCircle2, { size: 18 }),
                                "This project has already been delivered and is locked from further workflow changes."))
                            : readyForDelivery
                                ? (h(Fragment, null,
                                    h(lucide_react_1.CheckCircle2, { size: 18 }),
                                    "All delivery requirements are complete. This project can now be delivered to the Client."))
                                : (h(Fragment, null,
                                    h(lucide_react_1.PackageCheck, { size: 18 }),
                                    "Complete the render workflow and upload a final output before delivering the project."))))))),
        showDeliverModal &&
            (h("div", { className: "manager-deliver-modal-backdrop" },
                h("div", { className: "manager-deliver-modal" },
                    h("button", { type: "button", className: "manager-deliver-modal-close", onClick: () => setShowDeliverModal(false), disabled: delivering, "aria-label": "Close delivery confirmation" },
                        h(lucide_react_1.X, { size: 20 })),
                    h("div", { className: "manager-deliver-modal-icon" },
                        h(lucide_react_1.PackageCheck, { size: 31 })),
                    h("p", null, "Project Delivery"),
                    h("h2", null, "Deliver Project"),
                    h("span", null,
                        "You are about to mark",
                        ' ',
                        h("strong", null, projectData.projectName),
                        ' ',
                        "as delivered."),
                    h("div", { className: "manager-deliver-warning" }, "Once delivered, the project becomes locked from further design workflow changes and the assigned Client will receive a Project Delivered notification."),
                    h("div", { className: "manager-deliver-modal-actions" },
                        h("button", { type: "button", className: "manager-deliver-cancel", onClick: () => setShowDeliverModal(false), disabled: delivering }, "Cancel"),
                        h("button", { type: "button", className: "manager-deliver-confirm", onClick: handleDeliverProject, disabled: delivering },
                            h(lucide_react_1.PackageCheck, { size: 16 }),
                            delivering
                                ? 'Delivering...'
                                : 'Deliver Project')))))));
}
exports.default = ProjectManagerProjectDetailsPage;

});
__register("src/pages/ProjectManagerProjectsPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ProjectManagerSidebar_1 = __importDefault(require("../components/ProjectManagerSidebar"));
const authService_1 = require("../services/authService");
const projectManagerProjectService_1 = require("../services/projectManagerProjectService");
require("../styles/Dashboard.css");
require("../styles/ProjectManagerProjects.css");
function formatDate(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
function formatWorkflowStatus(value) {
    switch (value) {
        case 'DRAFT':
            return 'Draft';
        case 'FOR_REVIEW':
            return 'For Review';
        case 'REVISION_REQUESTED':
            return 'Revision Requested';
        case 'APPROVED':
            return 'Render Ready';
        case 'RENDERING':
            return 'Rendering';
        case 'COMPLETED':
            return 'Ready for Delivery';
        case 'FAILED':
            return 'Failed';
        default:
            return value || 'Unknown';
    }
}
function getWorkflowClass(value) {
    switch (value) {
        case 'COMPLETED':
            return 'manager-project-status-completed';
        case 'RENDERING':
            return 'manager-project-status-rendering';
        case 'APPROVED':
            return 'manager-project-status-approved';
        case 'FOR_REVIEW':
            return 'manager-project-status-review';
        case 'REVISION_REQUESTED':
            return 'manager-project-status-revision';
        case 'FAILED':
            return 'manager-project-status-failed';
        default:
            return 'manager-project-status-draft';
    }
}
function ProjectManagerProjectsPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [projects, setProjects] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [search, setSearch] = (0, react_1.useState)('');
    const [statusFilter, setStatusFilter] = (0, react_1.useState)('ALL');
    const email = (0, authService_1.getStoredEmail)() || '';
    const managerName = (0, authService_1.getStoredDisplayName)('Project Manager');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        async function loadProjects() {
            try {
                const data = await (0, projectManagerProjectService_1.loadManagerProjects)();
                if (cancelled) {
                    return;
                }
                setProjects(data);
                setError('');
            }
            catch (err) {
                if (cancelled) {
                    return;
                }
                setError(err.message ||
                    'Unable to load projects.');
            }
            finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadProjects();
        return () => {
            cancelled =
                true;
        };
    }, []);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const totalProjects = projects.length;
    const activeProjects = projects.filter(project => project.projectStatus ===
        'ACTIVE').length;
    const completedProjects = projects.filter(project => project.workflowStatus ===
        'COMPLETED' &&
        project.projectStatus !==
            'DELIVERED').length;
    const deliveredProjects = projects.filter(project => project.projectStatus ===
        'DELIVERED').length;
    const assignedClients = new Set(projects
        .map(project => project.clientUser?.userId)
        .filter(Boolean)).size;
    const normalizedSearch = search
        .trim()
        .toLowerCase();
    const filteredProjects = projects.filter(project => {
        const matchesSearch = !normalizedSearch ||
            project.projectName
                ?.toLowerCase()
                .includes(normalizedSearch) ||
            project.clientName
                ?.toLowerCase()
                .includes(normalizedSearch) ||
            project.designerName
                ?.toLowerCase()
                .includes(normalizedSearch);
        const matchesStatus = statusFilter ===
            'ALL' ||
            (statusFilter ===
                'DELIVERED'
                ? project.projectStatus ===
                    'DELIVERED'
                : project.workflowStatus ===
                    statusFilter &&
                    project.projectStatus !==
                        'DELIVERED');
        return (matchesSearch &&
            matchesStatus);
    });
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    return (h("div", { className: "dashboard-page" },
        h(ProjectManagerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Open profile menu" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, managerName),
                                    h("span", null, email),
                                    h("small", null, "Project Manager")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "manager-projects-main" },
                h("div", { className: "manager-projects-heading" },
                    h("div", null,
                        h("p", null, "Project Management"),
                        h("h1", null, "Projects"),
                        h("span", null, "Browse and monitor InteriorSync project workspaces."))),
                error &&
                    (h("div", { className: "manager-projects-error" }, error)),
                h("section", { className: "manager-projects-stats" },
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Folder, { size: 21 })),
                        h("span", null, "Total Projects"),
                        h("strong", null, totalProjects)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Activity, { size: 21 })),
                        h("span", null, "Active Projects"),
                        h("strong", null, activeProjects)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.PackageCheck, { size: 21 })),
                        h("span", null, "Ready for Delivery"),
                        h("strong", null, completedProjects)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.CheckCircle2, { size: 21 })),
                        h("span", null, "Delivered"),
                        h("strong", null, deliveredProjects)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.UsersRound, { size: 21 })),
                        h("span", null, "Assigned Clients"),
                        h("strong", null, assignedClients))),
                h("section", { className: "manager-projects-card" },
                    h("div", { className: "manager-projects-toolbar" },
                        h("div", { className: "manager-projects-search" },
                            h(lucide_react_1.Search, { size: 17 }),
                            h("input", { type: "text", value: search, placeholder: "Search projects, clients, or designers...", onChange: event => setSearch(event.target.value) })),
                        h("select", { value: statusFilter, onChange: event => setStatusFilter(event.target.value) },
                            h("option", { value: "ALL" }, "All Statuses"),
                            h("option", { value: "DRAFT" }, "Draft"),
                            h("option", { value: "FOR_REVIEW" }, "For Review"),
                            h("option", { value: "REVISION_REQUESTED" }, "Revision Requested"),
                            h("option", { value: "APPROVED" }, "Render Ready"),
                            h("option", { value: "RENDERING" }, "Rendering"),
                            h("option", { value: "COMPLETED" }, "Ready for Delivery"),
                            h("option", { value: "DELIVERED" }, "Delivered"))),
                    loading
                        ? (h("div", { className: "manager-projects-state" }, "Loading projects..."))
                        : filteredProjects.length
                            ? (h("div", { className: "manager-projects-table-wrap" },
                                h("table", { className: "manager-projects-table" },
                                    h("thead", null,
                                        h("tr", null,
                                            h("th", null, "Project"),
                                            h("th", null, "Client"),
                                            h("th", null, "Designer"),
                                            h("th", null, "Project Manager"),
                                            h("th", null, "Status"),
                                            h("th", null, "Assets"),
                                            h("th", null, "Last Activity"),
                                            h("th", null, "Action"))),
                                    h("tbody", null, filteredProjects.map(project => {
                                        const delivered = project.projectStatus ===
                                            'DELIVERED';
                                        return (h("tr", { key: project.projectId },
                                            h("td", null,
                                                h("div", { className: "manager-project-name-cell" },
                                                    h("div", null,
                                                        h(lucide_react_1.Folder, { size: 18 })),
                                                    h("span", null,
                                                        h("strong", null, project.projectName),
                                                        h("small", null,
                                                            "Project #",
                                                            project.projectId)))),
                                            h("td", null, project.clientName),
                                            h("td", null, project.designerName),
                                            h("td", null, project.projectManagerName),
                                            h("td", null,
                                                h("span", { className: delivered
                                                        ? 'manager-project-status manager-project-status-delivered'
                                                        : `manager-project-status ${getWorkflowClass(project.workflowStatus)}` },
                                                    h("i", null),
                                                    delivered
                                                        ? 'Delivered'
                                                        : formatWorkflowStatus(project.workflowStatus))),
                                            h("td", null, project.assets.length),
                                            h("td", null, formatDate(project.lastUpdated)),
                                            h("td", null,
                                                h("button", { type: "button", className: "manager-project-view-button", onClick: () => navigate(`/manager/projects/${project.projectId}`) }, "View Project"))));
                                    })))))
                            : (h("div", { className: "manager-projects-state" },
                                h(lucide_react_1.Folder, { size: 30 }),
                                h("strong", null, "No projects found"),
                                h("span", null, "Try changing your search or status filter."))),
                    h("div", { className: "manager-projects-footer" },
                        "Showing ",
                        filteredProjects.length,
                        " of ",
                        projects.length,
                        " projects"))))));
}
exports.default = ProjectManagerProjectsPage;

});
__register("src/pages/ProjectManagerRenderQueuePage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ProjectManagerSidebar_1 = __importDefault(require("../components/ProjectManagerSidebar"));
const authService_1 = require("../services/authService");
const projectManagerRenderQueueService_1 = require("../services/projectManagerRenderQueueService");
require("../styles/Dashboard.css");
require("../styles/ProjectManagerRenderQueue.css");
function formatDateTime(value) {
    if (!value) {
        return '—';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '—';
    }
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
function formatPriority(value) {
    if (!value) {
        return 'Normal';
    }
    return (value.charAt(0) +
        value
            .slice(1)
            .toLowerCase());
}
function formatStatus(value) {
    if (!value) {
        return 'Unknown';
    }
    return value
        .toLowerCase()
        .split('_')
        .map(word => word.charAt(0)
        .toUpperCase() +
        word.slice(1))
        .join(' ');
}
function ProjectManagerRenderQueuePage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [renderJobs, setRenderJobs] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [search, setSearch] = (0, react_1.useState)('');
    const [statusFilter, setStatusFilter] = (0, react_1.useState)('ALL');
    const [priorityFilter, setPriorityFilter] = (0, react_1.useState)('ALL');
    const [refreshKey, setRefreshKey] = (0, react_1.useState)(0);
    const email = (0, authService_1.getStoredEmail)() || '';
    const managerName = (0, authService_1.getStoredDisplayName)('Project Manager');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        async function loadPage() {
            try {
                setLoading(true);
                const data = await (0, projectManagerRenderQueueService_1.loadProjectManagerRenderQueue)();
                if (cancelled) {
                    return;
                }
                setRenderJobs(data);
                setError('');
            }
            catch (err) {
                if (cancelled) {
                    return;
                }
                setError(err.message ||
                    'Unable to load render queue.');
            }
            finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }
        loadPage();
        return () => {
            cancelled =
                true;
        };
    }, [
        refreshKey
    ]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const totalJobs = renderJobs.length;
    const queuedJobs = renderJobs.filter(job => job.status ===
        'QUEUED').length;
    const renderingJobs = renderJobs.filter(job => job.status ===
        'RENDERING').length;
    const completedJobs = renderJobs.filter(job => job.status ===
        'COMPLETED').length;
    const failedJobs = renderJobs.filter(job => job.status ===
        'FAILED').length;
    const normalizedSearch = search
        .trim()
        .toLowerCase();
    const visibleJobs = renderJobs.filter(job => {
        const matchesStatus = statusFilter ===
            'ALL' ||
            job.status ===
                statusFilter;
        const matchesPriority = priorityFilter ===
            'ALL' ||
            job.priority ===
                priorityFilter;
        const searchText = [
            `R-${String(job.renderJobId).padStart(3, '0')}`,
            job.projectName,
            job.assetName,
            job.submittedBy,
            job.priority,
            job.status,
            `v${job.versionNumber}`
        ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
        const matchesSearch = !normalizedSearch ||
            searchText.includes(normalizedSearch);
        return (matchesStatus &&
            matchesPriority &&
            matchesSearch);
    });
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    return (h("div", { className: "dashboard-page" },
        h(ProjectManagerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("button", { type: "button", className: "manager-render-refresh", onClick: () => setRefreshKey(previous => previous + 1), disabled: loading, "aria-label": "Refresh render queue" },
                        h(lucide_react_1.RefreshCw, { size: 17 })),
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Open profile menu" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14 })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, managerName),
                                    h("span", null, email),
                                    h("small", null, "Project Manager")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    "Logout")))))),
            h("main", { className: "manager-render-main" },
                h("div", { className: "manager-render-heading" },
                    h("div", null,
                        h("p", null, "Production"),
                        h("h1", null, "Render Queue"),
                        h("span", null, "Monitor approved design versions as they move through the render tracking workflow."))),
                error &&
                    (h("div", { className: "manager-render-error" }, error)),
                h("section", { className: "manager-render-stats" },
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.ListChecks, { size: 20 })),
                        h("span", null, "Total Jobs"),
                        h("strong", null, totalJobs)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.Clock3, { size: 20 })),
                        h("span", null, "Queued"),
                        h("strong", null, queuedJobs)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.RefreshCw, { size: 20 })),
                        h("span", null, "Rendering"),
                        h("strong", null, renderingJobs)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.CheckCircle2, { size: 20 })),
                        h("span", null, "Completed"),
                        h("strong", null, completedJobs)),
                    h("article", null,
                        h("div", null,
                            h(lucide_react_1.XCircle, { size: 20 })),
                        h("span", null, "Failed"),
                        h("strong", null, failedJobs))),
                h("section", { className: "manager-render-card" },
                    h("div", { className: "manager-render-toolbar" },
                        h("div", { className: "manager-render-search" },
                            h(lucide_react_1.Search, { size: 17 }),
                            h("input", { type: "text", value: search, placeholder: "Search render jobs...", onChange: event => setSearch(event.target.value) })),
                        h("select", { value: statusFilter, onChange: event => setStatusFilter(event.target.value) },
                            h("option", { value: "ALL" }, "All Statuses"),
                            h("option", { value: "QUEUED" }, "Queued"),
                            h("option", { value: "RENDERING" }, "Rendering"),
                            h("option", { value: "COMPLETED" }, "Completed"),
                            h("option", { value: "FAILED" }, "Failed")),
                        h("select", { value: priorityFilter, onChange: event => setPriorityFilter(event.target.value) },
                            h("option", { value: "ALL" }, "All Priorities"),
                            h("option", { value: "LOW" }, "Low"),
                            h("option", { value: "NORMAL" }, "Normal"),
                            h("option", { value: "HIGH" }, "High"))),
                    loading
                        ? (h("div", { className: "manager-render-empty" },
                            h(lucide_react_1.RefreshCw, { size: 28 }),
                            h("strong", null, "Loading render queue...")))
                        : visibleJobs.length ===
                            0
                            ? (h("div", { className: "manager-render-empty" },
                                h(lucide_react_1.ListChecks, { size: 30 }),
                                h("strong", null, "No render jobs found"),
                                h("span", null, "Try changing the selected status, priority, or search term.")))
                            : (h("div", { className: "manager-render-table-wrap" },
                                h("table", { className: "manager-render-table" },
                                    h("thead", null,
                                        h("tr", null,
                                            h("th", null, "Job ID"),
                                            h("th", null, "Project"),
                                            h("th", null, "Approved Version"),
                                            h("th", null, "Submitted By"),
                                            h("th", null, "Priority"),
                                            h("th", null, "Status"),
                                            h("th", null, "Date Submitted"),
                                            h("th", null, "Completion Date"),
                                            h("th", null, "Action"))),
                                    h("tbody", null, visibleJobs.map(job => (h("tr", { key: job.renderJobId },
                                        h("td", null,
                                            h("strong", null,
                                                "R-",
                                                String(job.renderJobId).padStart(3, '0'))),
                                        h("td", null,
                                            h("strong", { className: "manager-render-project-name" }, job.projectName),
                                            h("small", null, job.assetName)),
                                        h("td", null,
                                            h("strong", null,
                                                "v",
                                                job.versionNumber ||
                                                    '—'),
                                            h("small", null, formatStatus(job.versionStatus))),
                                        h("td", null,
                                            h("strong", null, job.submittedBy),
                                            h("small", null, job.submittedByEmail)),
                                        h("td", null,
                                            h("span", { className: `manager-render-priority manager-render-priority-${job.priority.toLowerCase()}` }, formatPriority(job.priority))),
                                        h("td", null,
                                            h("span", { className: `manager-render-status manager-render-status-${job.status.toLowerCase()}` },
                                                h("i", null),
                                                formatStatus(job.status))),
                                        h("td", null, formatDateTime(job.submittedAt)),
                                        h("td", null, formatDateTime(job.completedAt)),
                                        h("td", null,
                                            h("button", { type: "button", className: "manager-render-view-button", onClick: () => navigate(`/manager/projects/${job.projectId}`) }, "View Project"))))))))),
                    h("div", { className: "manager-render-footer" },
                        "Showing ",
                        visibleJobs.length,
                        " of ",
                        renderJobs.length,
                        " render jobs"))))));
}
exports.default = ProjectManagerRenderQueuePage;

});
__register("src/pages/ProjectManagerReportsPage.jsx",function(module,exports,require){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ProjectManagerSidebar_1 = __importDefault(require("../components/ProjectManagerSidebar"));
const authService_1 = require("../services/authService");
const projectManagerReportsService_1 = require("../services/projectManagerReportsService");
require("../styles/Dashboard.css");
require("../styles/ProjectManagerReports.css");
function formatLabel(value) {
    if (!value) {
        return 'Unknown';
    }
    return String(value)
        .replaceAll('_', ' ')
        .toLowerCase()
        .replace(/\b\w/g, character => character.toUpperCase());
}
function getPercentage(value, total) {
    if (!total ||
        total <= 0) {
        return 0;
    }
    return Math.min(100, Math.round((value / total) *
        100));
}
function SummaryBar({ label, value, total }) {
    const percentage = getPercentage(value, total);
    return (h("div", { className: "reports-bar-row" },
        h("div", { className: "reports-bar-label" },
            h("span", null, label),
            h("strong", null, value)),
        h("div", { className: "reports-bar-track" },
            h("div", { className: "reports-bar-fill", style: {
                    width: `${percentage}%`
                } })),
        h("small", null,
            percentage,
            "%")));
}
function ProjectManagerReportsPage() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const profileRef = (0, react_1.useRef)(null);
    const [sidebarOpen, setSidebarOpen] = (0, react_1.useState)(false);
    const [profileOpen, setProfileOpen] = (0, react_1.useState)(false);
    const [reportData, setReportData] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)('');
    const [searchTerm, setSearchTerm] = (0, react_1.useState)('');
    const email = (0, authService_1.getStoredEmail)() || '';
    const managerName = (0, authService_1.getStoredDisplayName)('Project Manager');
    (0, react_1.useEffect)(() => {
        let cancelled = false;
        (0, projectManagerReportsService_1.loadProjectManagerReports)()
            .then(data => {
            if (cancelled) {
                return;
            }
            setReportData(data);
            setError('');
        })
            .catch(err => {
            if (cancelled) {
                return;
            }
            if (err.message ===
                'Your session has expired. Please log in again.') {
                navigate('/login', {
                    replace: true
                });
                return;
            }
            setError(err.message ||
                'Unable to load reports.');
        })
            .finally(() => {
            if (cancelled) {
                return;
            }
            setLoading(false);
        });
        return () => {
            cancelled = true;
        };
    }, [navigate]);
    (0, react_1.useEffect)(() => {
        function handleOutsideClick(event) {
            if (profileRef.current &&
                !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    const summary = reportData?.summary || {
        totalProjects: 0,
        activeProjects: 0,
        pendingReviews: 0,
        revisionRequests: 0,
        renderJobs: 0,
        completedRenders: 0,
        failedRenders: 0
    };
    const projectStatus = reportData?.projectStatus || {
        active: 0,
        delivered: 0
    };
    const reviewStatus = reportData?.reviewStatus || {
        pending: 0,
        revisions: 0,
        renderReady: 0,
        drafts: 0
    };
    const renderStatus = reportData?.renderStatus || {
        queued: 0,
        rendering: 0,
        completed: 0,
        failed: 0
    };
    const filteredProjects = (0, react_1.useMemo)(() => {
        const query = searchTerm
            .trim()
            .toLowerCase();
        if (!query) {
            return (reportData
                ?.projectRows ||
                []);
        }
        return (reportData
            ?.projectRows ||
            []).filter(project => project.projectName
            ?.toLowerCase()
            .includes(query) ||
            project.status
                ?.toLowerCase()
                .includes(query));
    }, [
        reportData,
        searchTerm
    ]);
    const statCards = [
        {
            label: 'Total Projects',
            value: summary.totalProjects,
            icon: lucide_react_1.Folder
        },
        {
            label: 'Active Projects',
            value: summary.activeProjects,
            icon: lucide_react_1.ClipboardList
        },
        {
            label: 'Pending Reviews',
            value: summary.pendingReviews,
            icon: lucide_react_1.RefreshCw
        },
        {
            label: 'Revision Requests',
            value: summary.revisionRequests,
            icon: lucide_react_1.CircleAlert
        },
        {
            label: 'Render Jobs',
            value: summary.renderJobs,
            icon: lucide_react_1.ListChecks
        },
        {
            label: 'Completed Renders',
            value: summary.completedRenders,
            icon: lucide_react_1.CheckCircle2
        },
        {
            label: 'Failed Renders',
            value: summary.failedRenders,
            icon: lucide_react_1.CircleAlert
        }
    ];
    const totalReviewStates = reviewStatus.pending +
        reviewStatus.revisions +
        reviewStatus.renderReady +
        reviewStatus.drafts;
    const totalRenderStates = renderStatus.queued +
        renderStatus.rendering +
        renderStatus.completed +
        renderStatus.failed;
    return (h("div", { className: "dashboard-page" },
        h(ProjectManagerSidebar_1.default, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }),
        h("div", { className: "dashboard-content" },
            h("header", { className: "dashboard-topbar" },
                h("button", { type: "button", className: "mobile-menu-button", onClick: () => setSidebarOpen(true), "aria-label": "Open sidebar" },
                    h(lucide_react_1.Menu, { size: 24 })),
                h("div", { className: "topbar-actions" },
                    h("div", { className: "profile-menu-container", ref: profileRef },
                        h("button", { type: "button", className: "topbar-profile-button", onClick: () => setProfileOpen(previous => !previous), "aria-label": "Profile" },
                            h(lucide_react_1.UserCircle, { size: 38 }),
                            h(lucide_react_1.ChevronDown, { size: 14, className: "profile-chevron" })),
                        profileOpen &&
                            (h("div", { className: "profile-dropdown" },
                                h("div", { className: "profile-dropdown-user" },
                                    h("strong", null, managerName),
                                    h("span", null, email),
                                    h("small", null, "Project Manager")),
                                h("div", { className: "profile-dropdown-divider" }),
                                h("button", { type: "button", className: "profile-dropdown-action", onClick: handleLogout },
                                    h(lucide_react_1.LogOut, { size: 18 }),
                                    h("span", null, "Logout"))))))),
            h("main", { className: "reports-main" },
                h("div", { className: "reports-heading" },
                    h("div", null,
                        h("p", { className: "reports-eyebrow" }, "Monitoring"),
                        h("h1", null, "Reports"),
                        h("span", null, "View a live operational summary of projects, reviews, revisions, and render activity."))),
                error &&
                    (h("div", { className: "dashboard-error" }, error)),
                h("section", { className: "reports-stats-grid" }, statCards.map(stat => {
                    const Icon = stat.icon;
                    return (h("article", { className: "reports-stat-card", key: stat.label },
                        h("div", { className: "reports-stat-icon" },
                            h(Icon, { size: 21 })),
                        h("div", null,
                            h("span", null, stat.label),
                            h("strong", null, loading
                                ? '—'
                                : stat.value))));
                })),
                h("section", { className: "reports-chart-grid" },
                    h("article", { className: "reports-panel" },
                        h("div", { className: "reports-panel-header" },
                            h("div", null,
                                h("h2", null, "Project Status Summary"),
                                h("span", null, "Current project distribution.")),
                            h(lucide_react_1.Folder, { size: 20 })),
                        h("div", { className: "reports-bars" }, loading
                            ? (h("div", { className: "reports-loading" }, "Loading project status..."))
                            : (h(Fragment, null,
                                h(SummaryBar, { label: "Active", value: projectStatus.active, total: summary.totalProjects }),
                                h(SummaryBar, { label: "Delivered", value: projectStatus.delivered, total: summary.totalProjects }))))),
                    h("article", { className: "reports-panel" },
                        h("div", { className: "reports-panel-header" },
                            h("div", null,
                                h("h2", null, "Review Workflow"),
                                h("span", null, "Design version workflow summary.")),
                            h(lucide_react_1.RefreshCw, { size: 20 })),
                        h("div", { className: "reports-bars" }, loading
                            ? (h("div", { className: "reports-loading" }, "Loading review data..."))
                            : (h(Fragment, null,
                                h(SummaryBar, { label: "Draft", value: reviewStatus.drafts, total: totalReviewStates }),
                                h(SummaryBar, { label: "Pending Review", value: reviewStatus.pending, total: totalReviewStates }),
                                h(SummaryBar, { label: "Revision Requested", value: reviewStatus.revisions, total: totalReviewStates }),
                                h(SummaryBar, { label: "Render Ready", value: reviewStatus.renderReady, total: totalReviewStates }))))),
                    h("article", { className: "reports-panel" },
                        h("div", { className: "reports-panel-header" },
                            h("div", null,
                                h("h2", null, "Render Status"),
                                h("span", null, "Render job production summary.")),
                            h(lucide_react_1.BarChart3, { size: 20 })),
                        h("div", { className: "reports-bars" }, loading
                            ? (h("div", { className: "reports-loading" }, "Loading render data..."))
                            : (h(Fragment, null,
                                h(SummaryBar, { label: "Queued", value: renderStatus.queued, total: totalRenderStates }),
                                h(SummaryBar, { label: "Rendering", value: renderStatus.rendering, total: totalRenderStates }),
                                h(SummaryBar, { label: "Completed", value: renderStatus.completed, total: totalRenderStates }),
                                h(SummaryBar, { label: "Failed", value: renderStatus.failed, total: totalRenderStates })))))),
                h("section", { className: "reports-project-panel" },
                    h("div", { className: "reports-project-header" },
                        h("div", null,
                            h("h2", null, "Project Breakdown"),
                            h("span", null, "Operational totals grouped by project.")),
                        h("div", { className: "reports-search" },
                            h(lucide_react_1.Search, { size: 17 }),
                            h("input", { type: "text", value: searchTerm, onChange: event => setSearchTerm(event.target.value), placeholder: "Search projects..." }))),
                    loading
                        ? (h("div", { className: "reports-table-state" }, "Loading project report..."))
                        : filteredProjects.length > 0
                            ? (h("div", { className: "reports-table-wrapper" },
                                h("table", { className: "reports-table" },
                                    h("thead", null,
                                        h("tr", null,
                                            h("th", null, "Project"),
                                            h("th", null, "Status"),
                                            h("th", null, "Assets"),
                                            h("th", null, "Versions"),
                                            h("th", null, "Pending Reviews"),
                                            h("th", null, "Revision Requests"),
                                            h("th", null, "Render Ready"),
                                            h("th", null, "Render Jobs"),
                                            h("th", null, "Completed"),
                                            h("th", null, "Failed"))),
                                    h("tbody", null, filteredProjects.map(project => (h("tr", { key: project.projectId },
                                        h("td", null,
                                            h("strong", { className: "reports-project-name" }, project.projectName)),
                                        h("td", null,
                                            h("span", { className: project.status ===
                                                    'DELIVERED'
                                                    ? 'reports-status reports-status-delivered'
                                                    : 'reports-status reports-status-active' }, formatLabel(project.status))),
                                        h("td", null, project.assetCount),
                                        h("td", null, project.versionCount),
                                        h("td", null, project.pendingReviews),
                                        h("td", null, project.revisionRequests),
                                        h("td", null, project.renderReady),
                                        h("td", null, project.renderJobs),
                                        h("td", null, project.completedRenders),
                                        h("td", null, project.failedRenders))))))))
                            : (h("div", { className: "reports-table-state" },
                                h(lucide_react_1.BarChart3, { size: 30 }),
                                h("strong", null, "No projects found"),
                                h("span", null, "Try another project name."))),
                    !loading &&
                        (h("div", { className: "reports-footer" },
                            "Showing ",
                            filteredProjects.length,
                            " of ",
                            reportData
                                ?.projectRows
                                ?.length || 0,
                            " projects")))))));
}
exports.default = ProjectManagerReportsPage;

});
__register("src/pages/RoleDashboardPlaceholder.jsx",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const authService_1 = require("../services/authService");
require("../styles/RoleDashboardPlaceholder.css");
const ROLE_LABELS = {
    ADMIN: 'Administrator',
    PROJECT_MANAGER: 'Project Manager',
    INTERIOR_DESIGNER: 'Interior Designer',
    CLIENT: 'Client'
};
function RoleDashboardPlaceholder() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const role = (0, authService_1.getStoredRole)();
    const email = (0, authService_1.getStoredEmail)();
    const roleLabel = ROLE_LABELS[role] ||
        role ||
        'User';
    function handleLogout() {
        (0, authService_1.logout)();
        navigate('/login', {
            replace: true
        });
    }
    return (h("main", { className: "role-placeholder-page" },
        h("section", { className: "role-placeholder-card" },
            h("div", { className: "role-placeholder-icon" },
                h(lucide_react_1.ShieldCheck, { size: 34 })),
            h("p", { className: "role-placeholder-eyebrow" }, "InteriorSync"),
            h("h1", null,
                roleLabel,
                " Dashboard"),
            h("p", { className: "role-placeholder-message" }, "Role-based login is working. The final dashboard for this role will use the InteriorSync layout once its dashboard UI is integrated."),
            h("div", { className: "role-placeholder-user" },
                h("span", null, "Signed in as"),
                h("strong", null, email),
                h("small", null, role)),
            h("button", { type: "button", onClick: handleLogout, className: "role-placeholder-logout" },
                h(lucide_react_1.LogOut, { size: 17 }),
                "Logout"))));
}
exports.default = RoleDashboardPlaceholder;

});
__register("src/services/adminDashboardService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAdminDashboard = loadAdminDashboard;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function getUsers() {
    const response = await (0, authService_1.authenticatedFetch)('/api/users');
    const data = await readJson(response, 'Unable to load users.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getAuditLogs() {
    const response = await (0, authService_1.authenticatedFetch)('/api/audit-logs');
    const data = await readJson(response, 'Unable to load audit logs.');
    return Array.isArray(data)
        ? data
        : [];
}
function getRoleName(user) {
    if (typeof user?.role ===
        'string') {
        return user.role;
    }
    return (user
        ?.role
        ?.roleName ||
        'UNKNOWN');
}
function getAuditTimestamp(log) {
    return (log.createdAt ||
        log.timestamp ||
        log.loggedAt ||
        null);
}
function getAuditUser(log) {
    return (log.user ||
        log.performedBy ||
        log.actor ||
        null);
}
function getAuditAction(log) {
    return (log.action ||
        log.actionType ||
        'SYSTEM_ACTIVITY');
}
function getAuditTarget(log) {
    if (log.entityType &&
        log.entityId) {
        return (`${log.entityType} #${log.entityId}`);
    }
    if (log.targetEntity &&
        log.targetRecord) {
        return (`${log.targetEntity} ${log.targetRecord}`);
    }
    return (log.details ||
        log.description ||
        'System record');
}
function normalizeAuditLog(log, index) {
    const user = getAuditUser(log);
    return {
        id: log.auditLogId ||
            log.logId ||
            log.id ||
            `audit-${index}`,
        action: getAuditAction(log),
        target: getAuditTarget(log),
        timestamp: getAuditTimestamp(log),
        result: log.result ||
            log.status ||
            'Recorded',
        user
    };
}
async function loadAdminDashboard() {
    const [users, auditLogs] = await Promise.all([
        getUsers(),
        getAuditLogs()
    ]);
    const counts = {
        totalUsers: users.length,
        activeAccounts: users.filter(user => user.status ===
            'ACTIVE').length,
        administrators: users.filter(user => getRoleName(user) ===
            'ADMIN').length,
        projectManagers: users.filter(user => getRoleName(user) ===
            'PROJECT_MANAGER').length,
        designers: users.filter(user => getRoleName(user) ===
            'INTERIOR_DESIGNER').length,
        clients: users.filter(user => getRoleName(user) ===
            'CLIENT').length,
        auditEvents: auditLogs.length
    };
    const sortedUsers = users
        .slice()
        .sort((a, b) => new Date(b.createdAt || 0) -
        new Date(a.createdAt || 0));
    const recentAuditLogs = auditLogs
        .map(normalizeAuditLog)
        .filter(log => Boolean(log.timestamp))
        .sort((a, b) => new Date(b.timestamp) -
        new Date(a.timestamp))
        .slice(0, 6);
    return {
        counts,
        users: sortedUsers,
        recentAuditLogs,
        roleDistribution: [
            {
                role: 'Administrator',
                count: counts.administrators
            },
            {
                role: 'Project Manager',
                count: counts.projectManagers
            },
            {
                role: 'Interior Designer',
                count: counts.designers
            },
            {
                role: 'Client',
                count: counts.clients
            }
        ]
    };
}

});
__register("src/services/adminRolesAccessService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAdminRolesAccess = loadAdminRolesAccess;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
function getRoleName(user) {
    if (typeof user?.role ===
        'string') {
        return user.role;
    }
    return (user?.role?.roleName ||
        user?.roleName ||
        'UNKNOWN');
}
async function loadAdminRolesAccess() {
    const response = await (0, authService_1.authenticatedFetch)('/api/users');
    const data = await readJson(response, 'Unable to load system users.');
    const users = Array.isArray(data)
        ? data
        : [];
    const counts = {
        ADMIN: 0,
        PROJECT_MANAGER: 0,
        INTERIOR_DESIGNER: 0,
        CLIENT: 0
    };
    let activeAccounts = 0;
    for (const user of users) {
        const roleName = getRoleName(user);
        if (Object.prototype.hasOwnProperty.call(counts, roleName)) {
            counts[roleName] += 1;
        }
        if (user.status ===
            'ACTIVE') {
            activeAccounts += 1;
        }
    }
    return {
        users,
        totalUsers: users.length,
        activeAccounts,
        counts
    };
}

});
__register("src/services/adminSystemActivityService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAdminSystemActivity = loadAdminSystemActivity;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function getAuditLogs() {
    const response = await (0, authService_1.authenticatedFetch)('/api/audit-logs');
    const data = await readJson(response, 'Unable to load system activity.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getUsers() {
    try {
        const response = await (0, authService_1.authenticatedFetch)('/api/users');
        const data = await readJson(response, 'Unable to load users.');
        return Array.isArray(data)
            ? data
            : [];
    }
    catch {
        return [];
    }
}
function getUserId(value) {
    return (value?.userId ||
        value?.id ||
        null);
}
function getRoleName(user) {
    if (!user) {
        return 'SYSTEM';
    }
    if (typeof user.role ===
        'string') {
        return user.role;
    }
    return (user.role?.roleName ||
        user.roleName ||
        'SYSTEM');
}
function getUserDisplayName(user) {
    if (!user) {
        return 'System';
    }
    const firstName = user.firstName ||
        '';
    const lastName = user.lastName ||
        '';
    const fullName = `${firstName} ${lastName}`
        .trim();
    return (fullName ||
        user.email ||
        'System');
}
function normalizeText(value) {
    if (value === null ||
        value === undefined) {
        return '';
    }
    if (typeof value ===
        'object') {
        try {
            return JSON.stringify(value);
        }
        catch {
            return '';
        }
    }
    return String(value);
}
function formatIdentifier(value) {
    if (!value) {
        return 'System Activity';
    }
    return String(value)
        .replace(/[_-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase()
        .replace(/\b\w/g, character => character.toUpperCase());
}
function classifyActivity(action, entityType) {
    const combined = `${action || ''} ${entityType || ''}`
        .toUpperCase();
    if (combined.includes('RENDER') ||
        combined.includes('OUTPUT')) {
        return 'RENDER';
    }
    if (combined.includes('ASSET') ||
        combined.includes('VERSION') ||
        combined.includes('COMMENT') ||
        combined.includes('APPROVAL') ||
        combined.includes('REVISION')) {
        return 'DESIGN';
    }
    if (combined.includes('PROJECT') ||
        combined.includes('MEMBER') ||
        combined.includes('CONSULTATION')) {
        return 'PROJECT';
    }
    if (combined.includes('USER') ||
        combined.includes('ACCOUNT') ||
        combined.includes('ROLE') ||
        combined.includes('CLIENT')) {
        return 'USER';
    }
    return 'SYSTEM';
}
function getActorFromLog(log) {
    return (log.user ||
        log.actor ||
        log.performedBy ||
        log.createdBy ||
        null);
}
function getActorIdFromLog(log) {
    return (getUserId(getActorFromLog(log)) ||
        log.userId ||
        log.actorUserId ||
        log.performedByUserId ||
        log.createdByUserId ||
        null);
}
function getEntityType(log) {
    return (log.entityType ||
        log.targetType ||
        log.resourceType ||
        log.entity ||
        'SYSTEM');
}
function getEntityId(log) {
    return (log.entityId ||
        log.targetId ||
        log.resourceId ||
        null);
}
function getAction(log) {
    return (log.action ||
        log.actionType ||
        log.activity ||
        log.eventAction ||
        'SYSTEM_ACTIVITY');
}
function getTimestamp(log) {
    return (log.createdAt ||
        log.timestamp ||
        log.eventTime ||
        log.loggedAt ||
        log.updatedAt ||
        null);
}
function getDetails(log) {
    return normalizeText(log.details ||
        log.description ||
        log.message ||
        log.metadata ||
        log.result ||
        '');
}
async function loadAdminSystemActivity() {
    const [auditLogs, users] = await Promise.all([
        getAuditLogs(),
        getUsers()
    ]);
    const userMap = new Map();
    users.forEach(user => {
        const userId = getUserId(user);
        if (userId !== null) {
            userMap.set(Number(userId), user);
        }
    });
    const activities = auditLogs
        .map(log => {
        const actorFromLog = getActorFromLog(log);
        const actorId = getActorIdFromLog(log);
        const mappedUser = actorId !== null
            ? userMap.get(Number(actorId))
            : null;
        const actor = actorFromLog ||
            mappedUser;
        const action = getAction(log);
        const entityType = getEntityType(log);
        const entityId = getEntityId(log);
        const category = classifyActivity(action, entityType);
        return {
            activityId: log.auditLogId ||
                log.id ||
                `${action}-${entityType}-${entityId || ''}-${getTimestamp(log) || ''}`,
            timestamp: getTimestamp(log),
            action: formatIdentifier(action),
            rawAction: action,
            userName: getUserDisplayName(actor),
            role: getRoleName(actor),
            userId: actorId,
            entityType: formatIdentifier(entityType),
            rawEntityType: entityType,
            entityId,
            target: entityId !==
                null
                ? `${formatIdentifier(entityType)} #${entityId}`
                : formatIdentifier(entityType),
            details: getDetails(log) ||
                'Recorded system activity.',
            category
        };
    })
        .sort((a, b) => new Date(b.timestamp ||
        0).getTime() -
        new Date(a.timestamp ||
            0).getTime());
    return activities;
}

});
__register("src/services/adminUserManagementService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadUsers = loadUsers;
exports.createManagedUser = createManagedUser;
exports.updateManagedUser = updateManagedUser;
exports.updateManagedUserStatus = updateManagedUserStatus;
exports.deleteManagedUser = deleteManagedUser;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function loadUsers() {
    const response = await (0, authService_1.authenticatedFetch)('/api/users');
    const data = await readJson(response, 'Unable to load users.');
    return Array.isArray(data)
        ? data
        : [];
}
async function createManagedUser(form) {
    if (form.roleName ===
        'CLIENT') {
        const response = await (0, authService_1.authenticatedFetch)('/api/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: form.firstName.trim(),
                lastName: form.lastName.trim(),
                email: form.email
                    .trim()
                    .toLowerCase(),
                password: form.password,
                contactNumber: form.contactNumber.trim(),
                address: form.address.trim()
            })
        });
        return readJson(response, 'Unable to create client account.');
    }
    const response = await (0, authService_1.authenticatedFetch)('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: form.firstName.trim(),
            lastName: form.lastName.trim(),
            email: form.email
                .trim()
                .toLowerCase(),
            password: form.password,
            roleName: form.roleName
        })
    });
    return readJson(response, 'Unable to create user account.');
}
async function updateManagedUser(userId, form) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: form.firstName.trim(),
            lastName: form.lastName.trim(),
            email: form.email
                .trim()
                .toLowerCase(),
            password: form.password,
            roleName: form.roleName
        })
    });
    return readJson(response, 'Unable to update user account.');
}
async function updateManagedUserStatus(userId, status) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/users/${userId}/status`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status
        })
    });
    return readJson(response, 'Unable to update account status.');
}
async function deleteManagedUser(userId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/users/${userId}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        let data;
        try {
            data =
                await response.json();
        }
        catch {
            data = null;
        }
        throw new Error(data?.message ||
            'Unable to delete user account.');
    }
}

});
__register("src/services/auditLogService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAuditLogs = loadAuditLogs;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
function getRoleName(user) {
    if (!user) {
        return 'SYSTEM';
    }
    if (typeof user.role ===
        'string') {
        return user.role;
    }
    return (user.role?.roleName ||
        'UNKNOWN');
}
function getUserName(user) {
    if (!user) {
        return 'System';
    }
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`
        .trim();
    return (fullName ||
        user.email ||
        'Unknown User');
}
function normalizeAuditLog(log, index) {
    const user = log.user ||
        log.performedBy ||
        log.actor ||
        null;
    return {
        id: log.auditLogId ??
            log.logId ??
            log.id ??
            `audit-${index}`,
        user,
        userName: getUserName(user),
        role: getRoleName(user),
        action: log.action ||
            log.actionType ||
            'SYSTEM_ACTIVITY',
        entityType: log.entityType ||
            log.targetEntity ||
            'SYSTEM',
        entityId: log.entityId ??
            log.targetRecord ??
            null,
        details: log.details ||
            log.result ||
            log.status ||
            log.description ||
            'Recorded',
        createdAt: log.createdAt ||
            log.timestamp ||
            log.loggedAt ||
            null
    };
}
async function loadAuditLogs() {
    const response = await (0, authService_1.authenticatedFetch)('/api/audit-logs');
    const data = await readJson(response, 'Unable to load audit logs.');
    const logs = Array.isArray(data)
        ? data
        : [];
    return logs
        .map(normalizeAuditLog)
        .sort((a, b) => new Date(b.createdAt || 0) -
        new Date(a.createdAt || 0));
}

});
__register("src/services/authService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_ROLES = void 0;
exports.login = login;
exports.getToken = getToken;
exports.getStoredEmail = getStoredEmail;
exports.getStoredFirstName = getStoredFirstName;
exports.getStoredLastName = getStoredLastName;
exports.getStoredDisplayName = getStoredDisplayName;
exports.getStoredRole = getStoredRole;
exports.getStoredUserId = getStoredUserId;
exports.isAuthenticated = isAuthenticated;
exports.hasRole = hasRole;
exports.getDefaultRouteForRole = getDefaultRouteForRole;
exports.logout = logout;
exports.authenticatedFetch = authenticatedFetch;
const TOKEN_KEY = 'interiorsync_token';
const EMAIL_KEY = 'interiorsync_email';
const FIRST_NAME_KEY = 'interiorsync_first_name';
const LAST_NAME_KEY = 'interiorsync_last_name';
const USER_ID_KEY = 'interiorsync_user_id';
const ROLE_KEY = 'interiorsync_role';
exports.USER_ROLES = {
    CLIENT: 'CLIENT',
    INTERIOR_DESIGNER: 'INTERIOR_DESIGNER',
    PROJECT_MANAGER: 'PROJECT_MANAGER',
    ADMIN: 'ADMIN'
};
function normalizeRole(role) {
    if (!role) {
        return null;
    }
    return String(role)
        .trim()
        .toUpperCase();
}
async function login(email, password) {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            'Unable to login. Please try again.');
    }
    if (!data?.token) {
        throw new Error('Login succeeded but no authentication token was returned.');
    }
    const role = normalizeRole(data.role);
    if (!role) {
        throw new Error('Login succeeded but no user role was returned.');
    }
    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(EMAIL_KEY, data.email || email);
    localStorage.setItem(ROLE_KEY, role);
    if (data.firstName) {
        localStorage.setItem(FIRST_NAME_KEY, data.firstName);
    }
    else {
        localStorage.removeItem(FIRST_NAME_KEY);
    }
    if (data.lastName) {
        localStorage.setItem(LAST_NAME_KEY, data.lastName);
    }
    else {
        localStorage.removeItem(LAST_NAME_KEY);
    }
    if (data.userId !== null &&
        data.userId !== undefined) {
        localStorage.setItem(USER_ID_KEY, String(data.userId));
    }
    else {
        localStorage.removeItem(USER_ID_KEY);
    }
    return {
        ...data,
        role
    };
}
function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}
function getStoredEmail() {
    return localStorage.getItem(EMAIL_KEY);
}
function getStoredFirstName() {
    return (localStorage.getItem(FIRST_NAME_KEY) || '').trim();
}
function getStoredLastName() {
    return (localStorage.getItem(LAST_NAME_KEY) || '').trim();
}
function getStoredDisplayName(fallback = '') {
    const firstName = getStoredFirstName();
    const lastName = getStoredLastName();
    const fullName = `${firstName} ${lastName}`
        .trim();
    if (fullName) {
        return fullName;
    }
    return fallback;
}
function getStoredRole() {
    return normalizeRole(localStorage.getItem(ROLE_KEY));
}
function getStoredUserId() {
    const value = localStorage.getItem(USER_ID_KEY);
    if (!value) {
        return null;
    }
    const parsed = Number(value);
    return Number.isNaN(parsed)
        ? null
        : parsed;
}
function isAuthenticated() {
    return Boolean(getToken());
}
function hasRole(allowedRoles) {
    const role = getStoredRole();
    if (!role) {
        return false;
    }
    if (!Array.isArray(allowedRoles) ||
        allowedRoles.length === 0) {
        return true;
    }
    return allowedRoles
        .map(normalizeRole)
        .includes(role);
}
function getDefaultRouteForRole(role = getStoredRole()) {
    switch (normalizeRole(role)) {
        case exports.USER_ROLES.CLIENT:
            return '/client/dashboard';
        case exports.USER_ROLES.INTERIOR_DESIGNER:
            return '/designer/dashboard';
        case exports.USER_ROLES.PROJECT_MANAGER:
            return '/manager/dashboard';
        case exports.USER_ROLES.ADMIN:
            return '/admin/dashboard';
        default:
            return '/login';
    }
}
function logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EMAIL_KEY);
    localStorage.removeItem(FIRST_NAME_KEY);
    localStorage.removeItem(LAST_NAME_KEY);
    localStorage.removeItem(USER_ID_KEY);
    localStorage.removeItem(ROLE_KEY);
}
async function authenticatedFetch(url, options = {}) {
    const token = getToken();
    if (!token) {
        throw new Error('Authentication required.');
    }
    const response = await fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`
        }
    });
    if (response.status === 401) {
        logout();
        throw new Error('Your session has expired. Please log in again.');
    }
    return response;
}

});
__register("src/services/clientAssetLibraryService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadClientAssetLibrary = loadClientAssetLibrary;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function getProjects() {
    const response = await (0, authService_1.authenticatedFetch)('/api/projects');
    const data = await readJson(response, 'Unable to load projects.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getAssetsByProject(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/assets/project/${projectId}`);
    const data = await readJson(response, 'Unable to load project assets.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getVersionsByAsset(assetId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/asset/${assetId}`);
    const data = await readJson(response, 'Unable to load asset versions.');
    return Array.isArray(data)
        ? data
        : [];
}
function getUserName(user) {
    if (!user) {
        return 'Unknown';
    }
    const firstName = user.firstName?.trim() || '';
    const lastName = user.lastName?.trim() || '';
    const fullName = `${firstName} ${lastName}`.trim();
    return (fullName ||
        user.email ||
        'Unknown');
}
function getLatestVersion(asset, versions) {
    if (!versions.length) {
        return null;
    }
    const currentVersion = versions.find(version => version.versionId ===
        asset.currentVersionId);
    if (currentVersion) {
        return currentVersion;
    }
    return versions
        .slice()
        .sort((a, b) => (b.versionNumber || 0) -
        (a.versionNumber || 0))[0];
}
function buildAssetRow({ project, asset, versions }) {
    const latestVersion = getLatestVersion(asset, versions);
    return {
        assetId: asset.assetId,
        assetName: asset.assetName ||
            'Untitled Asset',
        assetType: asset.assetType ||
            'Unknown',
        category: asset.category ||
            'Uncategorized',
        tags: asset.tags || '',
        description: asset.description || '',
        projectId: project.projectId,
        projectName: project.projectName ||
            'Untitled Project',
        currentVersion: latestVersion,
        currentVersionNumber: latestVersion
            ?.versionNumber || null,
        currentVersionStatus: latestVersion
            ?.status || null,
        uploadedBy: latestVersion
            ?.uploadedBy ||
            asset.createdBy ||
            null,
        uploadedByName: getUserName(latestVersion
            ?.uploadedBy ||
            asset.createdBy),
        uploadDate: latestVersion
            ?.uploadedAt ||
            asset.createdAt ||
            null,
        versionCount: versions.length
    };
}
async function loadClientAssetLibrary() {
    const projects = await getProjects();
    const projectAssetGroups = await Promise.all(projects.map(async (project) => {
        const assets = await getAssetsByProject(project.projectId);
        const rows = await Promise.all(assets.map(async (asset) => {
            const versions = await getVersionsByAsset(asset.assetId);
            return buildAssetRow({
                project,
                asset,
                versions
            });
        }));
        return rows;
    }));
    return projectAssetGroups
        .flat()
        .sort((a, b) => new Date(b.uploadDate || 0) -
        new Date(a.uploadDate || 0));
}

});
__register("src/services/clientDashboardService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotifications = getNotifications;
exports.getUnreadNotificationCount = getUnreadNotificationCount;
exports.markNotificationAsRead = markNotificationAsRead;
exports.markAllNotificationsAsRead = markAllNotificationsAsRead;
exports.loadClientDashboard = loadClientDashboard;
const authService_1 = require("./authService");
async function readJson(response) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            'Unable to load dashboard data.');
    }
    return data;
}
async function getProjects() {
    const response = await (0, authService_1.authenticatedFetch)('/api/projects');
    const data = await readJson(response);
    return Array.isArray(data)
        ? data
        : [];
}
async function getAssetsByProject(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/assets/project/${projectId}`);
    const data = await readJson(response);
    return Array.isArray(data)
        ? data
        : [];
}
async function getVersionsByAsset(assetId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/asset/${assetId}`);
    const data = await readJson(response);
    return Array.isArray(data)
        ? data
        : [];
}
async function getRenderJobsByProject(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/render-jobs/project/${projectId}`);
    const data = await readJson(response);
    return Array.isArray(data)
        ? data
        : [];
}
async function getNotifications() {
    const response = await (0, authService_1.authenticatedFetch)('/api/notifications/me');
    const data = await readJson(response);
    return Array.isArray(data)
        ? data
        : [];
}
async function getUnreadNotificationCount() {
    const response = await (0, authService_1.authenticatedFetch)('/api/notifications/me/unread-count');
    const data = await readJson(response);
    return data?.unreadCount ?? 0;
}
async function markNotificationAsRead(notificationId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/notifications/${notificationId}/read`, {
        method: 'PATCH'
    });
    return readJson(response);
}
async function markAllNotificationsAsRead() {
    const response = await (0, authService_1.authenticatedFetch)('/api/notifications/me/read-all', {
        method: 'PATCH'
    });
    return readJson(response);
}
function getClientName(projects) {
    for (const project of projects) {
        const firstName = project?.client
            ?.user
            ?.firstName;
        if (firstName &&
            firstName.trim()) {
            return firstName.trim();
        }
    }
    return null;
}
function createProjectActivity(project) {
    if (!project?.createdAt) {
        return null;
    }
    return {
        id: `project-${project.projectId}`,
        type: 'PROJECT',
        title: 'Project Created',
        message: `${project.projectName} was created.`,
        timestamp: project.createdAt
    };
}
function createVersionActivity(version) {
    if (!version?.uploadedAt) {
        return null;
    }
    const assetName = version?.asset
        ?.assetName ||
        '3D Asset';
    return {
        id: `version-${version.versionId}`,
        type: 'VERSION',
        title: `Version ${version.versionNumber} Uploaded`,
        message: `${assetName} received a new version.`,
        timestamp: version.uploadedAt
    };
}
function createRenderActivity(renderJob) {
    const timestamp = renderJob.completedAt ||
        renderJob.updatedAt ||
        renderJob.submittedAt;
    if (!timestamp) {
        return null;
    }
    const projectName = renderJob?.project
        ?.projectName ||
        'Interior project';
    let title = 'Render Job Updated';
    let message = `${projectName} render job is ${renderJob.status?.toLowerCase() || 'updated'}.`;
    if (renderJob.status ===
        'QUEUED') {
        title =
            'Render Job Queued';
        message =
            `${projectName} was added to the render queue.`;
    }
    if (renderJob.status ===
        'RENDERING') {
        title =
            'Rendering Started';
        message =
            `${projectName} is currently rendering.`;
    }
    if (renderJob.status ===
        'COMPLETED') {
        title =
            'Render Completed';
        message =
            `${projectName} render job was completed.`;
    }
    if (renderJob.status ===
        'FAILED') {
        title =
            'Render Failed';
        message =
            `${projectName} render job failed.`;
    }
    return {
        id: `render-${renderJob.renderJobId}`,
        type: 'RENDER',
        status: renderJob.status,
        title,
        message,
        timestamp
    };
}
function buildRecentActivity(projectDetails) {
    const activities = [];
    for (const detail of projectDetails) {
        const projectActivity = createProjectActivity(detail.project);
        if (projectActivity) {
            activities.push(projectActivity);
        }
        for (const version of detail.versions) {
            const versionActivity = createVersionActivity(version);
            if (versionActivity) {
                activities.push(versionActivity);
            }
        }
        for (const renderJob of detail.renderJobs) {
            const renderActivity = createRenderActivity(renderJob);
            if (renderActivity) {
                activities.push(renderActivity);
            }
        }
    }
    return activities.sort((a, b) => new Date(b.timestamp) -
        new Date(a.timestamp));
}
async function loadClientDashboard() {
    const projects = await getProjects();
    const projectDetails = await Promise.all(projects.map(async (project) => {
        const projectId = project.projectId;
        const [assets, renderJobs] = await Promise.all([
            getAssetsByProject(projectId),
            getRenderJobsByProject(projectId)
        ]);
        const versionGroups = await Promise.all(assets.map(asset => getVersionsByAsset(asset.assetId)));
        return {
            project,
            assets,
            versions: versionGroups.flat(),
            renderJobs
        };
    }));
    const [notifications, unreadCount] = await Promise.all([
        getNotifications(),
        getUnreadNotificationCount()
    ]);
    const activeProjectDetails = projectDetails.filter(detail => detail.project.status ===
        'ACTIVE');
    const activeVersions = activeProjectDetails.flatMap(detail => detail.versions);
    const activeRenderJobs = activeProjectDetails.flatMap(detail => detail.renderJobs);
    const activeProjects = activeProjectDetails.length;
    const pendingReviews = activeVersions.filter(version => version.status ===
        'FOR_REVIEW').length;
    const revisionRequests = activeVersions.filter(version => version.status ===
        'REVISION_REQUESTED').length;
    const renderReady = activeVersions.filter(version => version.status ===
        'RENDER_READY').length;
    const queuedOrRendering = activeRenderJobs.filter(renderJob => renderJob.status ===
        'QUEUED' ||
        renderJob.status ===
            'RENDERING').length;
    const recentActivity = buildRecentActivity(projectDetails);
    return {
        clientName: getClientName(projects),
        projects,
        notifications,
        unreadCount,
        recentActivity,
        stats: {
            activeProjects,
            pendingReviews,
            revisionRequests,
            renderReady,
            queuedOrRendering
        }
    };
}

});
__register("src/services/clientFeedbackService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommentsForVersion = getCommentsForVersion;
exports.loadClientFeedback = loadClientFeedback;
exports.postClientComment = postClientComment;
exports.requestClientRevision = requestClientRevision;
exports.approveClientVersion = approveClientVersion;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function getProjects() {
    const response = await (0, authService_1.authenticatedFetch)('/api/projects');
    const data = await readJson(response, 'Unable to load projects.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getAssets(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/assets/project/${projectId}`);
    const data = await readJson(response, 'Unable to load project assets.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getVersions(assetId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/asset/${assetId}`);
    const data = await readJson(response, 'Unable to load asset versions.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getCommentsForVersion(versionId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/comments/version/${versionId}`);
    const data = await readJson(response, 'Unable to load comments.');
    return Array.isArray(data)
        ? data
        : [];
}
async function loadClientFeedback() {
    const projects = await getProjects();
    const reviews = [];
    for (const project of projects) {
        if (project.status ===
            'DELIVERED') {
            continue;
        }
        const assets = await getAssets(project.projectId);
        for (const asset of assets) {
            const versions = await getVersions(asset.assetId);
            const sortedVersions = versions
                .slice()
                .sort((a, b) => (a.versionNumber || 0) -
                (b.versionNumber || 0));
            for (const version of versions) {
                if (version.status !==
                    'FOR_REVIEW') {
                    continue;
                }
                reviews.push({
                    projectId: project.projectId,
                    projectName: project.projectName ||
                        'Untitled Project',
                    clientUserId: project?.client
                        ?.user
                        ?.userId ||
                        null,
                    assetId: asset.assetId,
                    assetName: asset.assetName ||
                        'Untitled Asset',
                    assetType: asset.assetType ||
                        'Unknown',
                    versionId: version.versionId,
                    versionNumber: version.versionNumber,
                    status: version.status,
                    uploadedAt: version.uploadedAt,
                    uploadedBy: version.uploadedBy,
                    changeNotes: version.changeNotes ||
                        '',
                    versions: sortedVersions
                });
            }
        }
    }
    return reviews.sort((a, b) => new Date(b.uploadedAt || 0) -
        new Date(a.uploadedAt || 0));
}
async function postClientComment({ versionId, userId, commentText }) {
    const response = await (0, authService_1.authenticatedFetch)('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            versionId,
            userId,
            commentText
        })
    });
    return readJson(response, 'Unable to post comment.');
}
async function requestClientRevision({ versionId, feedback }) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/${versionId}/request-revision`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            feedback
        })
    });
    return readJson(response, 'Unable to request revision.');
}
async function approveClientVersion({ versionId, remarks }) {
    const response = await (0, authService_1.authenticatedFetch)('/api/approvals/approve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            versionId,
            remarks
        })
    });
    return readJson(response, 'Unable to approve version.');
}

});
__register("src/services/clientProjectFeedbackService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadVersionComments = loadVersionComments;
exports.loadProjectFeedback = loadProjectFeedback;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function loadVersionComments(versionId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/comments/version/${versionId}`);
    const data = await readJson(response, 'Unable to load feedback for this version.');
    return Array.isArray(data)
        ? data
        : [];
}
async function loadProjectFeedback(versions) {
    const versionList = Array.isArray(versions)
        ? versions
        : [];
    const records = await Promise.all(versionList.map(async (version) => {
        try {
            const comments = await loadVersionComments(version.versionId);
            return {
                version,
                comments
            };
        }
        catch {
            return {
                version,
                comments: []
            };
        }
    }));
    return records.sort((a, b) => {
        const versionA = Number(a.version?.versionNumber ||
            0);
        const versionB = Number(b.version?.versionNumber ||
            0);
        if (versionA !==
            versionB) {
            return (versionB -
                versionA);
        }
        return (new Date(b.version?.uploadedAt ||
            0).getTime() -
            new Date(a.version?.uploadedAt ||
                0).getTime());
    });
}

});
__register("src/services/clientProjectService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDisplayName = getUserDisplayName;
exports.deriveWorkflowStatus = deriveWorkflowStatus;
exports.loadClientProjects = loadClientProjects;
exports.loadClientProjectDetails = loadClientProjectDetails;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage = 'Unable to load project information.') {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function getProjects() {
    const response = await (0, authService_1.authenticatedFetch)('/api/projects');
    const data = await readJson(response, 'Unable to load projects.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getProject(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/projects/${projectId}`);
    return readJson(response, 'Unable to load this project.');
}
async function getProjectMembers(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/project-members/project/${projectId}`);
    const data = await readJson(response, 'Unable to load project members.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getAssets(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/assets/project/${projectId}`);
    const data = await readJson(response, 'Unable to load project assets.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getVersions(assetId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/asset/${assetId}`);
    const data = await readJson(response, 'Unable to load asset versions.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getRenderJobs(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/render-jobs/project/${projectId}`);
    const data = await readJson(response, 'Unable to load render jobs.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getRenderOutputs(renderJobId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/render-outputs/render-job/${renderJobId}`);
    if (response.status === 404) {
        return [];
    }
    const data = await readJson(response, 'Unable to load final render output.');
    if (Array.isArray(data)) {
        return data;
    }
    return data
        ? [data]
        : [];
}
function getUserDisplayName(user) {
    if (!user) {
        return 'Not assigned';
    }
    const firstName = user.firstName?.trim() || '';
    const lastName = user.lastName?.trim() || '';
    const fullName = `${firstName} ${lastName}`
        .trim();
    return (fullName ||
        user.email ||
        'Not assigned');
}
function getMemberUser(members, roleName) {
    const member = members.find(item => item.assignedRole ===
        roleName);
    return member?.user || null;
}
function getLatestVersion(versions) {
    if (!versions.length) {
        return null;
    }
    return versions
        .slice()
        .sort((a, b) => {
        const versionA = a.versionNumber || 0;
        const versionB = b.versionNumber || 0;
        if (versionA !==
            versionB) {
            return (versionB -
                versionA);
        }
        return (new Date(b.uploadedAt || 0) -
            new Date(a.uploadedAt || 0));
    })[0];
}
function getRenderTimestamp(renderJob) {
    return new Date(renderJob.updatedAt ||
        renderJob.completedAt ||
        renderJob.submittedAt ||
        0);
}
function getLatestRenderJob(renderJobs) {
    if (!renderJobs.length) {
        return null;
    }
    return renderJobs
        .slice()
        .sort((a, b) => getRenderTimestamp(b) -
        getRenderTimestamp(a))[0];
}
function getLatestOutput(outputs) {
    if (!outputs.length) {
        return null;
    }
    return outputs
        .slice()
        .sort((a, b) => new Date(b.uploadedAt ||
        b.createdAt ||
        0) -
        new Date(a.uploadedAt ||
            a.createdAt ||
            0))[0];
}
function deriveWorkflowStatus({ project, latestVersion, latestRenderJob }) {
    if (project?.status ===
        'DELIVERED') {
        return 'COMPLETED';
    }
    if (latestRenderJob?.status ===
        'FAILED') {
        return 'FAILED';
    }
    if (latestRenderJob?.status ===
        'QUEUED' ||
        latestRenderJob?.status ===
            'RENDERING') {
        return 'RENDERING';
    }
    if (latestRenderJob?.status ===
        'COMPLETED') {
        return 'COMPLETED';
    }
    if (!latestVersion) {
        return 'DRAFT';
    }
    if (latestVersion.status ===
        'FOR_REVIEW') {
        return 'FOR_REVIEW';
    }
    if (latestVersion.status ===
        'REVISION_REQUESTED') {
        return 'REVISION_REQUESTED';
    }
    if (latestVersion.status ===
        'RENDER_READY') {
        return 'APPROVED';
    }
    return 'DRAFT';
}
function getLatestTimestamp({ project, assets, versions, renderJobs }) {
    const timestamps = [];
    if (project?.createdAt) {
        timestamps.push(new Date(project.createdAt));
    }
    for (const asset of assets) {
        if (asset.createdAt) {
            timestamps.push(new Date(asset.createdAt));
        }
    }
    for (const version of versions) {
        if (version.uploadedAt) {
            timestamps.push(new Date(version.uploadedAt));
        }
    }
    for (const renderJob of renderJobs) {
        const timestamp = getRenderTimestamp(renderJob);
        if (!Number.isNaN(timestamp.getTime())) {
            timestamps.push(timestamp);
        }
    }
    if (!timestamps.length) {
        return null;
    }
    return new Date(Math.max(...timestamps.map(date => date.getTime())));
}
function buildProgress({ project, assets, versions, renderJobs, latestRenderJob, latestOutput, workflowStatus }) {
    const projectExists = Boolean(project?.projectId);
    const hasAssets = assets.length > 0;
    const hasVersions = versions.length > 0;
    const hasReachedReview = versions.some(version => [
        'FOR_REVIEW',
        'REVISION_REQUESTED',
        'RENDER_READY'
    ].includes(version.status)) ||
        renderJobs.length > 0 ||
        project?.status ===
            'DELIVERED';
    const hasClientDecision = versions.some(version => [
        'REVISION_REQUESTED',
        'RENDER_READY'
    ].includes(version.status)) ||
        renderJobs.length > 0 ||
        project?.status ===
            'DELIVERED';
    const hasApproval = versions.some(version => version.status ===
        'RENDER_READY') ||
        renderJobs.length > 0 ||
        project?.status ===
            'DELIVERED';
    const hasRenderQueue = renderJobs.length > 0;
    const hasRendering = renderJobs.some(job => [
        'RENDERING',
        'COMPLETED',
        'FAILED'
    ].includes(job.status));
    const hasFinalOutput = Boolean(latestOutput);
    const isDelivered = project?.status ===
        'DELIVERED';
    const steps = [
        {
            key: 'CONSULTATION',
            label: 'Consultation',
            complete: Boolean(project?.consultation) ||
                projectExists
        },
        {
            key: 'PROJECT_STARTED',
            label: 'Project started',
            complete: projectExists
        },
        {
            key: 'DESIGN_UPLOAD',
            label: 'Design upload',
            complete: hasAssets
        },
        {
            key: 'VERSIONING',
            label: 'Versioning',
            complete: hasVersions
        },
        {
            key: 'YOUR_REVIEW',
            label: 'Your review',
            complete: hasReachedReview
        },
        {
            key: 'YOUR_DECISION',
            label: 'Your decision',
            complete: hasClientDecision
        },
        {
            key: 'APPROVED',
            label: 'Approved',
            complete: hasApproval
        },
        {
            key: 'RENDER_QUEUE',
            label: 'Render queue',
            complete: hasRenderQueue
        },
        {
            key: 'RENDERING',
            label: 'Rendering',
            complete: hasRendering
        },
        {
            key: 'FINAL_OUTPUT',
            label: 'Final output',
            complete: hasFinalOutput
        },
        {
            key: 'DELIVERED',
            label: 'Delivered',
            complete: isDelivered
        }
    ];
    let currentKey = null;
    if (!isDelivered) {
        if (workflowStatus ===
            'REVISION_REQUESTED') {
            currentKey =
                'VERSIONING';
        }
        else if (workflowStatus ===
            'FOR_REVIEW') {
            currentKey =
                'YOUR_REVIEW';
        }
        else if (workflowStatus ===
            'APPROVED') {
            currentKey =
                'RENDER_QUEUE';
        }
        else if (workflowStatus ===
            'RENDERING') {
            if (latestRenderJob?.status ===
                'QUEUED') {
                currentKey =
                    'RENDER_QUEUE';
            }
            else {
                currentKey =
                    'RENDERING';
            }
        }
        else if (workflowStatus ===
            'COMPLETED') {
            currentKey =
                hasFinalOutput
                    ? 'DELIVERED'
                    : 'FINAL_OUTPUT';
        }
        else if (!hasAssets) {
            currentKey =
                'DESIGN_UPLOAD';
        }
        else {
            currentKey =
                'VERSIONING';
        }
    }
    return steps.map(step => ({
        ...step,
        current: step.key ===
            currentKey
    }));
}
async function buildProjectData(project) {
    const projectId = project.projectId;
    const [members, assets, renderJobs] = await Promise.all([
        getProjectMembers(projectId),
        getAssets(projectId),
        getRenderJobs(projectId)
    ]);
    const versionGroups = await Promise.all(assets.map(asset => getVersions(asset.assetId)));
    const versions = versionGroups.flat();
    const latestVersion = getLatestVersion(versions);
    const latestRenderJob = getLatestRenderJob(renderJobs);
    let renderOutputs = [];
    if (latestRenderJob) {
        renderOutputs =
            await getRenderOutputs(latestRenderJob.renderJobId);
    }
    const latestOutput = getLatestOutput(renderOutputs);
    const designer = getMemberUser(members, 'INTERIOR_DESIGNER');
    const projectManager = getMemberUser(members, 'PROJECT_MANAGER');
    const clientUser = project?.client?.user;
    const workflowStatus = deriveWorkflowStatus({
        project,
        latestVersion,
        latestRenderJob
    });
    return {
        projectId,
        projectName: project.projectName ||
            'Untitled Project',
        description: project.description || '',
        projectStatus: project.status,
        createdAt: project.createdAt,
        consultation: project.consultation || null,
        clientUser,
        designer,
        projectManager,
        clientName: getUserDisplayName(clientUser),
        designerName: getUserDisplayName(designer),
        projectManagerName: getUserDisplayName(projectManager),
        workflowStatus,
        lastUpdated: getLatestTimestamp({
            project,
            assets,
            versions,
            renderJobs
        }),
        assets,
        versions,
        renderJobs,
        renderOutputs,
        latestVersion,
        latestRenderJob,
        latestOutput,
        progress: buildProgress({
            project,
            assets,
            versions,
            renderJobs,
            latestRenderJob,
            latestOutput,
            workflowStatus
        }),
        project
    };
}
async function loadClientProjects() {
    const projects = await getProjects();
    const rows = await Promise.all(projects.map(project => buildProjectData(project)));
    return rows.sort((a, b) => new Date(b.lastUpdated || 0) -
        new Date(a.lastUpdated || 0));
}
async function loadClientProjectDetails(projectId) {
    const project = await getProject(projectId);
    return buildProjectData(project);
}

});
__register("src/services/clientRenderQueueService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadClientRenderQueue = loadClientRenderQueue;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function getProjects() {
    const response = await (0, authService_1.authenticatedFetch)('/api/projects');
    const data = await readJson(response, 'Unable to load projects.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getRenderJobs(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/render-jobs/project/${projectId}`);
    const data = await readJson(response, 'Unable to load render jobs.');
    return Array.isArray(data)
        ? data
        : [];
}
function getUserName(user) {
    if (!user) {
        return 'Unknown';
    }
    const firstName = user.firstName?.trim() || '';
    const lastName = user.lastName?.trim() || '';
    const fullName = `${firstName} ${lastName}`
        .trim();
    return (fullName ||
        user.email ||
        'Unknown');
}
function getJobTimestamp(job) {
    return new Date(job.updatedAt ||
        job.completedAt ||
        job.submittedAt ||
        0);
}
function buildRenderJobRow(job, project) {
    return {
        renderJobId: job.renderJobId,
        projectId: project.projectId,
        projectName: project.projectName ||
            'Untitled Project',
        versionId: job?.version?.versionId ||
            null,
        versionNumber: job?.version?.versionNumber ||
            null,
        assetName: job?.version
            ?.asset
            ?.assetName ||
            'Design Asset',
        submittedBy: job.submittedBy ||
            null,
        submittedByName: getUserName(job.submittedBy),
        priority: job.priority ||
            'NORMAL',
        status: job.status ||
            'QUEUED',
        submittedAt: job.submittedAt ||
            null,
        updatedAt: job.updatedAt ||
            null,
        completedAt: job.completedAt ||
            null
    };
}
async function loadClientRenderQueue() {
    const projects = await getProjects();
    const groups = await Promise.all(projects.map(async (project) => {
        const renderJobs = await getRenderJobs(project.projectId);
        return renderJobs.map(job => buildRenderJobRow(job, project));
    }));
    return groups
        .flat()
        .sort((a, b) => getJobTimestamp(b) -
        getJobTimestamp(a));
}

});
__register("src/services/clientVersionHistoryService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadClientVersionHistory = loadClientVersionHistory;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function getProjects() {
    const response = await (0, authService_1.authenticatedFetch)('/api/projects');
    const data = await readJson(response, 'Unable to load projects.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getAssets(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/assets/project/${projectId}`);
    const data = await readJson(response, 'Unable to load project assets.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getVersions(assetId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/asset/${assetId}`);
    const data = await readJson(response, 'Unable to load asset versions.');
    return Array.isArray(data)
        ? data
        : [];
}
function getCurrentVersion(asset, versions) {
    if (!versions.length) {
        return null;
    }
    const explicitCurrent = versions.find(version => version.versionId ===
        asset.currentVersionId);
    if (explicitCurrent) {
        return explicitCurrent;
    }
    return versions
        .slice()
        .sort((a, b) => (b.versionNumber || 0) -
        (a.versionNumber || 0))[0];
}
async function loadClientVersionHistory() {
    const projects = await getProjects();
    const groups = [];
    for (const project of projects) {
        const assets = await getAssets(project.projectId);
        for (const asset of assets) {
            const versions = await getVersions(asset.assetId);
            if (!versions.length) {
                continue;
            }
            const currentVersion = getCurrentVersion(asset, versions);
            groups.push({
                assetId: asset.assetId,
                assetName: asset.assetName ||
                    'Untitled Asset',
                assetType: asset.assetType ||
                    'Unknown',
                category: asset.category ||
                    'Uncategorized',
                projectId: project.projectId,
                projectName: project.projectName ||
                    'Untitled Project',
                currentVersionId: currentVersion?.versionId ||
                    null,
                versions: versions
                    .slice()
                    .sort((a, b) => (a.versionNumber || 0) -
                    (b.versionNumber || 0))
            });
        }
    }
    return groups.sort((a, b) => a.projectName.localeCompare(b.projectName) ||
        a.assetName.localeCompare(b.assetName));
}

});
__register("src/services/consultationService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitClientConsultation = submitClientConsultation;
exports.loadMyConsultations = loadMyConsultations;
exports.loadManagerConsultations = loadManagerConsultations;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
function normalizeConsultation(consultation) {
    return {
        ...consultation,
        consultationId: Number(consultation.consultationId),
        clientId: Number(consultation.clientId),
        clientUserId: Number(consultation.clientUserId),
        clientName: consultation.clientName ||
            'Unknown Client',
        clientEmail: consultation.clientEmail ||
            '',
        status: consultation.status ||
            'NEW'
    };
}
async function submitClientConsultation({ requirements, budget, timeline, spaceInformation, stylePreferences, references }) {
    const response = await (0, authService_1.authenticatedFetch)('/api/consultations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            requirements: requirements.trim(),
            budget: budget === ''
                ? null
                : Number(budget),
            timeline: timeline.trim(),
            spaceInformation: spaceInformation.trim(),
            stylePreferences: stylePreferences.trim(),
            references: references.trim() ||
                null
        })
    });
    const data = await readJson(response, 'Unable to submit the consultation.');
    return normalizeConsultation(data);
}
async function loadMyConsultations() {
    const response = await (0, authService_1.authenticatedFetch)('/api/consultations/my');
    const data = await readJson(response, 'Unable to load your consultations.');
    return (Array.isArray(data)
        ? data
        : []).map(normalizeConsultation);
}
async function loadManagerConsultations() {
    const response = await (0, authService_1.authenticatedFetch)('/api/consultations');
    const data = await readJson(response, 'Unable to load Client consultations.');
    return (Array.isArray(data)
        ? data
        : []).map(normalizeConsultation);
}

});
__register("src/services/designerAssetLibraryService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDesignerAssetLibrary = loadDesignerAssetLibrary;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function getProjects() {
    const response = await (0, authService_1.authenticatedFetch)('/api/projects');
    const data = await readJson(response, 'Unable to load assigned projects.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getAssets(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/assets/project/${projectId}`);
    const data = await readJson(response, 'Unable to load project assets.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getVersions(assetId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/asset/${assetId}`);
    const data = await readJson(response, 'Unable to load asset versions.');
    return Array.isArray(data)
        ? data
        : [];
}
function getDisplayName(user) {
    if (!user) {
        return 'Interior Designer';
    }
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`
        .trim();
    return (fullName ||
        user.email ||
        'Interior Designer');
}
function getLatestVersion(asset, versions) {
    if (asset.currentVersionId) {
        const current = versions.find(version => Number(version.versionId) ===
            Number(asset.currentVersionId));
        if (current) {
            return current;
        }
    }
    return [...versions]
        .sort((a, b) => Number(b.versionNumber ||
        0) -
        Number(a.versionNumber ||
            0))[0] || null;
}
async function loadDesignerAssetLibrary() {
    const projects = await getProjects();
    const projectResults = await Promise.all(projects.map(async (project) => {
        const assets = await getAssets(project.projectId);
        const assetResults = await Promise.all(assets.map(async (asset) => {
            const versions = await getVersions(asset.assetId);
            const currentVersion = getLatestVersion(asset, versions);
            return {
                assetId: asset.assetId,
                assetName: asset.assetName,
                assetType: asset.assetType ||
                    'Design Asset',
                category: asset.category ||
                    'Uncategorized',
                description: asset.description ||
                    '',
                metadata: asset.metadata ||
                    '',
                projectId: project.projectId,
                projectName: project.projectName,
                projectStatus: project.status ||
                    project.projectStatus ||
                    'ACTIVE',
                currentVersionId: currentVersion
                    ?.versionId ||
                    null,
                currentVersionNumber: currentVersion
                    ?.versionNumber ||
                    null,
                currentVersionStatus: currentVersion
                    ?.status ||
                    'DRAFT',
                uploadedBy: getDisplayName(currentVersion
                    ?.uploadedBy),
                uploadedAt: currentVersion
                    ?.uploadedAt ||
                    asset.createdAt,
                versionCount: versions.length
            };
        }));
        return assetResults;
    }));
    const assets = projectResults.flat();
    const categories = [
        ...new Set(assets
            .map(asset => asset.category)
            .filter(Boolean))
    ]
        .sort((a, b) => a.localeCompare(b));
    const projectOptions = projects
        .map(project => ({
        projectId: project.projectId,
        projectName: project.projectName,
        projectStatus: project.status ||
            project.projectStatus ||
            'ACTIVE'
    }))
        .sort((a, b) => a.projectName.localeCompare(b.projectName));
    return {
        assets,
        categories,
        projects: projectOptions
    };
}

});
__register("src/services/designerAssetUploadService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDesignerProjects = loadDesignerProjects;
exports.validateAssetFile = validateAssetFile;
exports.createAsset = createAsset;
exports.uploadInitialVersion = uploadInitialVersion;
exports.createAssetWithInitialVersion = createAssetWithInitialVersion;
const authService_1 = require("./authService");
const MAX_FILE_SIZE = 100 * 1024 * 1024;
const ALLOWED_EXTENSIONS = [
    'blend',
    'skp',
    'obj',
    'fbx',
    'glb',
    'gltf'
];
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function loadDesignerProjects() {
    const response = await (0, authService_1.authenticatedFetch)('/api/projects');
    const data = await readJson(response, 'Unable to load assigned projects.');
    const projects = Array.isArray(data)
        ? data
        : [];
    return projects
        .filter(project => project.status !==
        'DELIVERED')
        .sort((a, b) => String(a.projectName || '').localeCompare(String(b.projectName || '')));
}
function validateAssetFile(file) {
    if (!file) {
        return 'Please select a file.';
    }
    if (file.size >
        MAX_FILE_SIZE) {
        return 'The selected file exceeds the 100 MB upload limit.';
    }
    const extension = file.name
        .split('.')
        .pop()
        ?.toLowerCase();
    if (!extension ||
        !ALLOWED_EXTENSIONS.includes(extension)) {
        return 'Invalid file format. Allowed formats are BLEND, SKP, OBJ, FBX, GLB, and GLTF.';
    }
    return '';
}
async function createAsset({ projectId, assetName, assetType, category, description, tags }) {
    const response = await (0, authService_1.authenticatedFetch)('/api/assets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            projectId: Number(projectId),
            assetName: assetName.trim(),
            assetType,
            category,
            description: description.trim(),
            tags: tags.trim()
        })
    });
    return readJson(response, 'Unable to create the asset.');
}
async function uploadInitialVersion({ assetId, changeNotes, file }) {
    const token = (0, authService_1.getToken)();
    if (!token) {
        throw new Error('Your session has expired. Please log in again.');
    }
    const formData = new FormData();
    formData.append('assetId', String(assetId));
    formData.append('changeNotes', changeNotes.trim());
    formData.append('file', file);
    const response = await fetch('/api/asset-versions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData
    });
    return readJson(response, 'Unable to upload the initial asset version.');
}
async function createAssetWithInitialVersion(form) {
    const asset = await createAsset(form);
    try {
        const version = await uploadInitialVersion({
            assetId: asset.assetId,
            changeNotes: form.changeNotes,
            file: form.file
        });
        return {
            asset,
            version
        };
    }
    catch (error) {
        throw new Error(`The asset record was created, but Version 1 could not be uploaded. ${error instanceof Error
            ? error.message
            : 'Unknown upload error.'}`, {
            cause: error
        });
    }
}

});
__register("src/services/designerDashboardService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDesignerDashboard = loadDesignerDashboard;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function getProjects() {
    const response = await (0, authService_1.authenticatedFetch)('/api/projects');
    const data = await readJson(response, 'Unable to load assigned projects.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getAssets(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/assets/project/${projectId}`);
    const data = await readJson(response, 'Unable to load project assets.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getVersions(assetId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/asset/${assetId}`);
    const data = await readJson(response, 'Unable to load asset versions.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getRenderJobs(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/render-jobs/project/${projectId}`);
    const data = await readJson(response, 'Unable to load render jobs.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getNotifications() {
    const response = await (0, authService_1.authenticatedFetch)('/api/notifications/me');
    const data = await readJson(response, 'Unable to load notifications.');
    return Array.isArray(data)
        ? data
        : [];
}
function getLatestTimestamp(renderJob) {
    return (renderJob.completedAt ||
        renderJob.updatedAt ||
        renderJob.submittedAt ||
        null);
}
function createRecentActivity({ projects, projectDetails }) {
    const activity = [];
    for (const project of projects) {
        if (project.createdAt) {
            activity.push({
                id: `project-${project.projectId}`,
                type: 'PROJECT',
                title: 'Project Assigned',
                message: `${project.projectName} is available in your workspace.`,
                timestamp: project.createdAt
            });
        }
    }
    for (const detail of projectDetails) {
        for (const assetDetail of detail.assets) {
            for (const version of assetDetail.versions) {
                let title = `Version ${version.versionNumber} Uploaded`;
                if (version.status ===
                    'REVISION_REQUESTED') {
                    title =
                        'Revision Requested';
                }
                if (version.status ===
                    'FOR_REVIEW') {
                    title =
                        'Version Submitted for Review';
                }
                if (version.status ===
                    'RENDER_READY') {
                    title =
                        'Design Render Ready';
                }
                activity.push({
                    id: `version-${version.versionId}`,
                    type: 'VERSION',
                    title,
                    message: `${assetDetail.asset.assetName} · ${detail.project.projectName}`,
                    timestamp: version.uploadedAt
                });
            }
        }
        for (const job of detail.renderJobs) {
            let title = 'Render Job Updated';
            if (job.status ===
                'QUEUED') {
                title =
                    'Render Job Queued';
            }
            if (job.status ===
                'RENDERING') {
                title =
                    'Rendering Started';
            }
            if (job.status ===
                'COMPLETED') {
                title =
                    'Render Completed';
            }
            if (job.status ===
                'FAILED') {
                title =
                    'Render Failed';
            }
            activity.push({
                id: `render-${job.renderJobId}`,
                type: 'RENDER',
                status: job.status,
                title,
                message: detail.project.projectName,
                timestamp: getLatestTimestamp(job)
            });
        }
    }
    return activity
        .filter(item => Boolean(item.timestamp))
        .sort((a, b) => new Date(b.timestamp) -
        new Date(a.timestamp))
        .slice(0, 5);
}
async function loadDesignerDashboard() {
    const [projects, notifications] = await Promise.all([
        getProjects(),
        getNotifications()
    ]);
    const projectDetails = await Promise.all(projects.map(async (project) => {
        const [assets, renderJobs] = await Promise.all([
            getAssets(project.projectId),
            getRenderJobs(project.projectId)
        ]);
        const assetDetails = await Promise.all(assets.map(async (asset) => ({
            asset,
            versions: await getVersions(asset.assetId)
        })));
        return {
            project,
            assets: assetDetails,
            renderJobs
        };
    }));
    const activeDetails = projectDetails.filter(detail => detail.project.status !==
        'DELIVERED');
    const activeVersions = activeDetails.flatMap(detail => detail.assets.flatMap(assetDetail => assetDetail.versions));
    const activeRenderJobs = activeDetails.flatMap(detail => detail.renderJobs);
    const allRenderJobs = projectDetails.flatMap(detail => detail.renderJobs);
    const counts = {
        assignedProjects: projects.length,
        revisionRequests: activeVersions.filter(version => version.status ===
            'REVISION_REQUESTED').length,
        renderReady: activeVersions.filter(version => version.status ===
            'RENDER_READY').length,
        queuedJobs: activeRenderJobs.filter(job => job.status ===
            'QUEUED').length,
        renderingJobs: activeRenderJobs.filter(job => job.status ===
            'RENDERING').length,
        completedRenders: allRenderJobs.filter(job => job.status ===
            'COMPLETED').length,
        failedRenders: allRenderJobs.filter(job => job.status ===
            'FAILED').length
    };
    const sortedNotifications = notifications
        .slice()
        .sort((a, b) => new Date(b.createdAt || 0) -
        new Date(a.createdAt || 0));
    const unreadCount = notifications.filter(notification => notification.isRead ===
        false).length;
    return {
        counts,
        projects: projects
            .slice()
            .sort((a, b) => new Date(b.createdAt || 0) -
            new Date(a.createdAt || 0)),
        recentActivity: createRecentActivity({
            projects,
            projectDetails
        }),
        notifications: sortedNotifications
            .slice(0, 5),
        unreadCount
    };
}

});
__register("src/services/designerFeedbackService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDesignerFeedback = loadDesignerFeedback;
const authService_1 = require("./authService");
const designerProjectService_1 = require("./designerProjectService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function getVersionComments(versionId) {
    try {
        const response = await (0, authService_1.authenticatedFetch)(`/api/comments/version/${versionId}`);
        const data = await readJson(response, 'Unable to load version comments.');
        return Array.isArray(data)
            ? data
            : [];
    }
    catch {
        return [];
    }
}
function getDisplayName(user, fallback = 'Client') {
    if (!user) {
        return fallback;
    }
    const actualUser = user.user ||
        user;
    const fullName = `${actualUser.firstName || ''} ${actualUser.lastName || ''}`
        .trim();
    return (fullName ||
        actualUser.email ||
        fallback);
}
function getCommentText(comment) {
    return (comment.commentText ||
        comment.content ||
        comment.text ||
        comment.message ||
        '');
}
function getCommentUser(comment) {
    return getDisplayName(comment.user ||
        comment.createdBy ||
        comment.commentedBy ||
        comment.author, 'Client');
}
function getCommentDate(comment) {
    return (comment.createdAt ||
        comment.commentedAt ||
        comment.timestamp ||
        comment.updatedAt ||
        null);
}
function findAssetForVersion(project, version) {
    if (version.asset) {
        return version.asset;
    }
    const assetId = version.assetId;
    if (assetId) {
        return project.assets.find(asset => Number(asset.assetId) ===
            Number(assetId)) || null;
    }
    return null;
}
function isFeedbackRelevant(version, comments) {
    return (comments.length > 0 ||
        version.status ===
            'FOR_REVIEW' ||
        version.status ===
            'REVISION_REQUESTED' ||
        version.status ===
            'RENDER_READY');
}
async function loadDesignerFeedback() {
    const projects = await (0, designerProjectService_1.loadDesignerProjects)();
    const projectFeedback = await Promise.all(projects.map(async (project) => {
        const versionFeedback = await Promise.all(project.versions.map(async (version) => {
            const comments = await getVersionComments(version.versionId);
            if (!isFeedbackRelevant(version, comments)) {
                return null;
            }
            const asset = findAssetForVersion(project, version);
            return {
                projectId: project.projectId,
                projectName: project.projectName,
                projectStatus: project.projectStatus,
                clientName: project.clientName ||
                    'Client',
                designerName: project.designerName ||
                    'Interior Designer',
                assetId: asset?.assetId ||
                    version.asset?.assetId ||
                    version.assetId ||
                    null,
                assetName: asset?.assetName ||
                    version.asset?.assetName ||
                    'Design Asset',
                versionId: version.versionId,
                versionNumber: version.versionNumber,
                versionStatus: version.status,
                changeNotes: version.changeNotes ||
                    '',
                uploadedAt: version.uploadedAt,
                comments: comments.map(comment => ({
                    commentId: comment.commentId ||
                        comment.id,
                    text: getCommentText(comment),
                    userName: getCommentUser(comment),
                    createdAt: getCommentDate(comment)
                }))
            };
        }));
        return versionFeedback
            .filter(Boolean);
    }));
    const feedbackItems = projectFeedback
        .flat()
        .sort((a, b) => {
        const aTimestamp = Math.max(new Date(a.uploadedAt ||
            0).getTime(), ...a.comments.map(comment => new Date(comment.createdAt ||
            0).getTime()));
        const bTimestamp = Math.max(new Date(b.uploadedAt ||
            0).getTime(), ...b.comments.map(comment => new Date(comment.createdAt ||
            0).getTime()));
        return (bTimestamp -
            aTimestamp);
    });
    const projectOptions = projects
        .map(project => ({
        projectId: project.projectId,
        projectName: project.projectName
    }))
        .sort((a, b) => a.projectName.localeCompare(b.projectName));
    return {
        feedbackItems,
        projects: projectOptions
    };
}

});
__register("src/services/designerFinalOutputService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFinalOutputFile = validateFinalOutputFile;
exports.getRenderOutput = getRenderOutput;
exports.uploadFinalOutput = uploadFinalOutput;
exports.viewFinalOutput = viewFinalOutput;
exports.downloadFinalOutput = downloadFinalOutput;
const authService_1 = require("./authService");
const MAX_FILE_SIZE = 100 * 1024 * 1024;
const ALLOWED_EXTENSIONS = [
    'png',
    'jpg',
    'jpeg',
    'webp',
    'pdf'
];
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
function validateFinalOutputFile(file) {
    if (!file) {
        return 'Please select a final output file.';
    }
    if (file.size >
        MAX_FILE_SIZE) {
        return 'Maximum file size is 100 MB.';
    }
    const extension = file.name
        .split('.')
        .pop()
        ?.toLowerCase();
    if (!extension ||
        !ALLOWED_EXTENSIONS.includes(extension)) {
        return 'Invalid file format. Please upload PNG, JPG, JPEG, WEBP, or PDF.';
    }
    return '';
}
async function getRenderOutput(renderJobId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/render-outputs/render-job/${renderJobId}`);
    if (response.status === 404) {
        return null;
    }
    const data = await readJson(response, 'Unable to load the final output.');
    if (Array.isArray(data)) {
        return data.length
            ? data[0]
            : null;
    }
    return data || null;
}
async function uploadFinalOutput({ renderJobId, file }) {
    const validationError = validateFinalOutputFile(file);
    if (validationError) {
        throw new Error(validationError);
    }
    const token = (0, authService_1.getToken)();
    if (!token) {
        throw new Error('Your session has expired. Please log in again.');
    }
    const formData = new FormData();
    formData.append('renderJobId', String(renderJobId));
    formData.append('file', file);
    const response = await fetch('/api/render-outputs', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData
    });
    return readJson(response, 'Unable to upload the final output.');
}
async function getProtectedBlob(url, fallbackMessage) {
    const response = await (0, authService_1.authenticatedFetch)(url);
    if (!response.ok) {
        let data;
        try {
            data =
                await response.json();
        }
        catch {
            data = null;
        }
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return {
        blob: await response.blob(),
        disposition: response.headers.get('content-disposition')
    };
}
async function viewFinalOutput(outputId) {
    const { blob } = await getProtectedBlob(`/api/render-outputs/${outputId}/view`, 'Unable to open the final output.');
    const objectUrl = URL.createObjectURL(blob);
    window.open(objectUrl, '_blank', 'noopener,noreferrer');
    window.setTimeout(() => {
        URL.revokeObjectURL(objectUrl);
    }, 60000);
}
async function downloadFinalOutput(output) {
    const { blob, disposition } = await getProtectedBlob(`/api/render-outputs/${output.outputId}/download`, 'Unable to download the final output.');
    const objectUrl = URL.createObjectURL(blob);
    const match = disposition?.match(/filename="?([^"]+)"?/i);
    const fileName = match?.[1] ||
        output.fileName ||
        'final-output';
    const link = document.createElement('a');
    link.href =
        objectUrl;
    link.download =
        fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
}

});
__register("src/services/designerProjectService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDesignerProjects = loadDesignerProjects;
exports.loadDesignerProjectDetails = loadDesignerProjectDetails;
const clientProjectService_1 = require("./clientProjectService");
async function loadDesignerProjects() {
    return (0, clientProjectService_1.loadClientProjects)();
}
async function loadDesignerProjectDetails(projectId) {
    return (0, clientProjectService_1.loadClientProjectDetails)(projectId);
}

});
__register("src/services/designerRenderQueueService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitRenderJob = submitRenderJob;
exports.loadProjectRenderJobs = loadProjectRenderJobs;
exports.loadDesignerRenderJobs = loadDesignerRenderJobs;
exports.updateRenderJobStatus = updateRenderJobStatus;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function submitRenderJob({ projectId, versionId, priority }) {
    const response = await (0, authService_1.authenticatedFetch)('/api/render-jobs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            projectId: Number(projectId),
            versionId: Number(versionId),
            priority
        })
    });
    return readJson(response, 'Unable to submit the render job.');
}
async function loadProjectRenderJobs(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/render-jobs/project/${projectId}`);
    const data = await readJson(response, 'Unable to load render jobs.');
    return Array.isArray(data)
        ? data
        : [];
}
async function loadDesignerRenderJobs() {
    const projectsResponse = await (0, authService_1.authenticatedFetch)('/api/projects');
    const projects = await readJson(projectsResponse, 'Unable to load assigned projects.');
    const projectList = Array.isArray(projects)
        ? projects
        : [];
    const groups = await Promise.all(projectList.map(async (project) => {
        const jobs = await loadProjectRenderJobs(project.projectId);
        return jobs.map(job => ({
            ...job,
            project: job.project ||
                project
        }));
    }));
    return groups
        .flat()
        .sort((a, b) => new Date(b.submittedAt ||
        b.updatedAt ||
        0).getTime() -
        new Date(a.submittedAt ||
            a.updatedAt ||
            0).getTime());
}
async function updateRenderJobStatus(renderJobId, status) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/render-jobs/${renderJobId}/status`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status
        })
    });
    return readJson(response, 'Unable to update the render job status.');
}

});
__register("src/services/designerVersionUploadService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDesignerVersionProjects = loadDesignerVersionProjects;
exports.loadActiveDesignerProjects = loadActiveDesignerProjects;
exports.loadProjectAssets = loadProjectAssets;
exports.loadAssetVersions = loadAssetVersions;
exports.loadVersionComments = loadVersionComments;
exports.uploadNewAssetVersion = uploadNewAssetVersion;
exports.submitVersionForReview = submitVersionForReview;
exports.downloadAssetVersion = downloadAssetVersion;
const authService_1 = require("./authService");
const designerAssetUploadService_1 = require("./designerAssetUploadService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function loadDesignerVersionProjects() {
    const response = await (0, authService_1.authenticatedFetch)('/api/projects');
    const data = await readJson(response, 'Unable to load assigned projects.');
    return (Array.isArray(data)
        ? data
        : []).sort((a, b) => String(a.projectName || '').localeCompare(String(b.projectName || '')));
}
async function loadActiveDesignerProjects() {
    const projects = await loadDesignerVersionProjects();
    return projects.filter(project => project.status !==
        'DELIVERED');
}
async function loadProjectAssets(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/assets/project/${projectId}`);
    const data = await readJson(response, 'Unable to load project assets.');
    return (Array.isArray(data)
        ? data
        : []).sort((a, b) => String(a.assetName || '').localeCompare(String(b.assetName || '')));
}
async function loadAssetVersions(assetId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/asset/${assetId}`);
    const data = await readJson(response, 'Unable to load asset versions.');
    return (Array.isArray(data)
        ? data
        : []).sort((a, b) => Number(b.versionNumber || 0) -
        Number(a.versionNumber || 0));
}
async function loadVersionComments(versionId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/comments/version/${versionId}`);
    const data = await readJson(response, 'Unable to load client feedback.');
    return Array.isArray(data)
        ? data
        : [];
}
async function uploadNewAssetVersion({ assetId, changeNotes, file }) {
    const fileError = (0, designerAssetUploadService_1.validateAssetFile)(file);
    if (fileError) {
        throw new Error(fileError);
    }
    const token = (0, authService_1.getToken)();
    if (!token) {
        throw new Error('Your session has expired. Please log in again.');
    }
    const formData = new FormData();
    formData.append('assetId', String(assetId));
    formData.append('changeNotes', changeNotes.trim());
    formData.append('file', file);
    const response = await fetch('/api/asset-versions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData
    });
    return readJson(response, 'Unable to upload the new version.');
}
async function submitVersionForReview(versionId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/${versionId}/submit-review`, {
        method: 'POST'
    });
    return readJson(response, 'Unable to submit this version for review.');
}
async function downloadAssetVersion(version) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/${version.versionId}/download`);
    if (!response.ok) {
        let data;
        try {
            data =
                await response.json();
        }
        catch {
            data = null;
        }
        throw new Error(data?.message ||
            'Unable to download this version.');
    }
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const disposition = response.headers.get('content-disposition');
    const fileNameMatch = disposition?.match(/filename="?([^"]+)"?/i);
    const fallbackName = `asset-version-v${version.versionNumber || 'file'}`;
    const fileName = fileNameMatch?.[1] ||
        fallbackName;
    const anchor = document.createElement('a');
    anchor.href =
        objectUrl;
    anchor.download =
        fileName;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(objectUrl);
}

});
__register("src/services/notificationPageService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMyNotifications = loadMyNotifications;
exports.markNotificationRead = markNotificationRead;
exports.markAllNotificationsRead = markAllNotificationsRead;
const authService_1 = require("./authService");
const clientDashboardService_1 = require("./clientDashboardService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function loadMyNotifications() {
    const response = await (0, authService_1.authenticatedFetch)('/api/notifications/me');
    const data = await readJson(response, 'Unable to load notifications.');
    const notifications = Array.isArray(data)
        ? data
        : [];
    return notifications
        .slice()
        .sort((a, b) => new Date(b.createdAt || 0) -
        new Date(a.createdAt || 0));
}
async function markNotificationRead(notificationId) {
    return (0, clientDashboardService_1.markNotificationAsRead)(notificationId);
}
async function markAllNotificationsRead() {
    return (0, clientDashboardService_1.markAllNotificationsAsRead)();
}

});
__register("src/services/projectManagerActivityService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadProjectManagerActivity = loadProjectManagerActivity;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function getProjects() {
    const response = await (0, authService_1.authenticatedFetch)('/api/projects');
    const data = await readJson(response, 'Unable to load projects.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getAssets(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/assets/project/${projectId}`);
    const data = await readJson(response, 'Unable to load project assets.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getVersions(assetId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/asset/${assetId}`);
    const data = await readJson(response, 'Unable to load asset versions.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getRenderJobs(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/render-jobs/project/${projectId}`);
    const data = await readJson(response, 'Unable to load render jobs.');
    return Array.isArray(data)
        ? data
        : [];
}
function getDisplayName(value, fallback = 'System') {
    if (!value) {
        return fallback;
    }
    const user = value.user ||
        value;
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`
        .trim();
    return (fullName ||
        user.email ||
        fallback);
}
function getProjectStatus(project) {
    return (project.status ||
        project.projectStatus ||
        'ACTIVE');
}
function getVersionTitle(version) {
    if (version.status ===
        'FOR_REVIEW') {
        return 'Design Submitted for Review';
    }
    if (version.status ===
        'REVISION_REQUESTED') {
        return 'Revision Requested';
    }
    if (version.status ===
        'RENDER_READY') {
        return 'Design Approved';
    }
    return `Version ${version.versionNumber} Uploaded`;
}
function getRenderTitle(renderJob) {
    if (renderJob.status ===
        'QUEUED') {
        return 'Render Job Submitted';
    }
    if (renderJob.status ===
        'RENDERING') {
        return 'Rendering Started';
    }
    if (renderJob.status ===
        'COMPLETED') {
        return 'Render Completed';
    }
    if (renderJob.status ===
        'FAILED') {
        return 'Render Failed';
    }
    return 'Render Job Updated';
}
function buildActivities(projectDetails) {
    const activities = [];
    for (const detail of projectDetails) {
        const project = detail.project;
        const projectId = project.projectId;
        const projectName = project.projectName;
        if (project.createdAt) {
            activities.push({
                id: `project-${projectId}`,
                type: 'PROJECT',
                projectId,
                projectName,
                title: 'Project Created',
                details: 'Project workspace was created and activated.',
                userName: getDisplayName(project.projectManager, 'Project Manager'),
                timestamp: project.createdAt,
                status: getProjectStatus(project)
            });
        }
        for (const assetDetail of detail.assets) {
            const asset = assetDetail.asset;
            if (asset.createdAt) {
                activities.push({
                    id: `asset-${asset.assetId}`,
                    type: 'ASSET',
                    projectId,
                    projectName,
                    title: 'Asset Submitted',
                    details: asset.assetName,
                    userName: getDisplayName(asset.uploadedBy ||
                        asset.createdBy, 'Interior Designer'),
                    timestamp: asset.createdAt,
                    status: 'UPLOADED'
                });
            }
            for (const version of assetDetail.versions) {
                if (!version.uploadedAt) {
                    continue;
                }
                activities.push({
                    id: `version-${version.versionId}`,
                    type: 'VERSION',
                    projectId,
                    projectName,
                    title: getVersionTitle(version),
                    details: version.changeNotes ||
                        `${asset.assetName} · Version ${version.versionNumber}`,
                    userName: getDisplayName(version.uploadedBy, 'Interior Designer'),
                    timestamp: version.uploadedAt,
                    status: version.status
                });
            }
        }
        for (const renderJob of detail.renderJobs) {
            const timestamp = renderJob.completedAt ||
                renderJob.updatedAt ||
                renderJob.submittedAt;
            if (!timestamp) {
                continue;
            }
            activities.push({
                id: `render-${renderJob.renderJobId}`,
                type: 'RENDER',
                projectId,
                projectName,
                title: getRenderTitle(renderJob),
                details: `Render Job R-${String(renderJob.renderJobId).padStart(3, '0')} · Priority: ${renderJob.priority || 'Normal'}`,
                userName: getDisplayName(renderJob.submittedBy, 'Interior Designer'),
                timestamp,
                status: renderJob.status
            });
        }
    }
    return activities
        .filter(activity => Boolean(activity.timestamp))
        .sort((a, b) => new Date(b.timestamp) -
        new Date(a.timestamp));
}
async function loadProjectManagerActivity() {
    const projects = await getProjects();
    const projectDetails = await Promise.all(projects.map(async (project) => {
        const [assets, renderJobs] = await Promise.all([
            getAssets(project.projectId),
            getRenderJobs(project.projectId)
        ]);
        const assetDetails = await Promise.all(assets.map(async (asset) => ({
            asset,
            versions: await getVersions(asset.assetId)
        })));
        return {
            project,
            assets: assetDetails,
            renderJobs
        };
    }));
    const activities = buildActivities(projectDetails);
    const projectOptions = projects
        .map(project => ({
        projectId: project.projectId,
        projectName: project.projectName
    }))
        .sort((a, b) => a.projectName.localeCompare(b.projectName));
    return {
        activities,
        projects: projectOptions
    };
}

});
__register("src/services/projectManagerDashboardService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadProjectManagerDashboard = loadProjectManagerDashboard;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function getProjects() {
    const response = await (0, authService_1.authenticatedFetch)('/api/projects');
    const data = await readJson(response, 'Unable to load projects.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getProjectMembers(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/project-members/project/${projectId}`);
    const data = await readJson(response, 'Unable to load project members.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getAssets(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/assets/project/${projectId}`);
    const data = await readJson(response, 'Unable to load project assets.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getVersions(assetId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/asset/${assetId}`);
    const data = await readJson(response, 'Unable to load asset versions.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getRenderJobs(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/render-jobs/project/${projectId}`);
    const data = await readJson(response, 'Unable to load render jobs.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getNotifications() {
    const response = await (0, authService_1.authenticatedFetch)('/api/notifications/me');
    const data = await readJson(response, 'Unable to load notifications.');
    return Array.isArray(data)
        ? data
        : [];
}
function getUserId(user) {
    return (user?.userId ??
        null);
}
function getRoleName(member) {
    if (typeof member?.assignedRole ===
        'string') {
        return member.assignedRole;
    }
    return (member
        ?.assignedRole
        ?.roleName ||
        null);
}
function getMemberUser(member) {
    return (member?.user ||
        member?.member ||
        null);
}
function uniqueUsers(users) {
    const map = new Map();
    for (const user of users) {
        const userId = getUserId(user);
        if (userId === null ||
            userId === undefined) {
            continue;
        }
        map.set(userId, user);
    }
    return [
        ...map.values()
    ];
}
function buildProjectActivity(projectDetails) {
    const items = [];
    for (const detail of projectDetails) {
        const project = detail.project;
        if (project.createdAt) {
            items.push({
                id: `project-${project.projectId}`,
                title: 'Project Created',
                message: project.projectName,
                timestamp: project.createdAt,
                status: project.status
            });
        }
        for (const assetDetail of detail.assets) {
            const asset = assetDetail.asset;
            if (asset.createdAt) {
                items.push({
                    id: `asset-${asset.assetId}`,
                    title: 'Asset Submitted',
                    message: `${asset.assetName} · ${project.projectName}`,
                    timestamp: asset.createdAt
                });
            }
            for (const version of assetDetail.versions) {
                let title = `Version ${version.versionNumber} Uploaded`;
                if (version.status ===
                    'FOR_REVIEW') {
                    title =
                        'Design Submitted for Review';
                }
                if (version.status ===
                    'REVISION_REQUESTED') {
                    title =
                        'Revision Requested';
                }
                if (version.status ===
                    'RENDER_READY') {
                    title =
                        'Design Approved';
                }
                items.push({
                    id: `version-${version.versionId}`,
                    title,
                    message: `${asset.assetName} · ${project.projectName}`,
                    timestamp: version.uploadedAt,
                    status: version.status
                });
            }
        }
        for (const job of detail.renderJobs) {
            let title = 'Render Job Updated';
            if (job.status ===
                'QUEUED') {
                title =
                    'Render Job Submitted';
            }
            if (job.status ===
                'RENDERING') {
                title =
                    'Rendering Started';
            }
            if (job.status ===
                'COMPLETED') {
                title =
                    'Render Completed';
            }
            if (job.status ===
                'FAILED') {
                title =
                    'Render Failed';
            }
            items.push({
                id: `render-${job.renderJobId}`,
                title,
                message: project.projectName,
                timestamp: job.completedAt ||
                    job.updatedAt ||
                    job.submittedAt,
                status: job.status
            });
        }
    }
    return items
        .filter(item => Boolean(item.timestamp))
        .sort((a, b) => new Date(b.timestamp) -
        new Date(a.timestamp))
        .slice(0, 6);
}
async function loadProjectManagerDashboard() {
    const [projects, notifications] = await Promise.all([
        getProjects(),
        getNotifications()
    ]);
    const projectDetails = await Promise.all(projects.map(async (project) => {
        const [members, assets, renderJobs] = await Promise.all([
            getProjectMembers(project.projectId),
            getAssets(project.projectId),
            getRenderJobs(project.projectId)
        ]);
        const assetDetails = await Promise.all(assets.map(async (asset) => ({
            asset,
            versions: await getVersions(asset.assetId)
        })));
        const designers = members
            .filter(member => getRoleName(member) ===
            'INTERIOR_DESIGNER')
            .map(getMemberUser)
            .filter(Boolean);
        return {
            project,
            members,
            designers,
            assets: assetDetails,
            renderJobs
        };
    }));
    const activeProjects = projects.filter(project => project.status !==
        'DELIVERED');
    const allDesigners = uniqueUsers(projectDetails.flatMap(detail => detail.designers));
    const allClients = uniqueUsers(projects
        .map(project => project
        ?.client
        ?.user)
        .filter(Boolean));
    const allAssets = projectDetails.flatMap(detail => detail.assets);
    const allVersions = allAssets.flatMap(assetDetail => assetDetail.versions);
    const activeProjectIds = new Set(activeProjects.map(project => project.projectId));
    const activeVersions = projectDetails
        .filter(detail => activeProjectIds.has(detail.project.projectId))
        .flatMap(detail => detail.assets.flatMap(assetDetail => assetDetail.versions));
    const allRenderJobs = projectDetails.flatMap(detail => detail.renderJobs);
    const counts = {
        activeProjects: activeProjects.length,
        assignedDesigners: allDesigners.length,
        assignedClients: allClients.length,
        submittedAssets: allAssets.length,
        pendingReviews: activeVersions.filter(version => version.status ===
            'FOR_REVIEW').length,
        approvedDesigns: allVersions.filter(version => version.status ===
            'RENDER_READY').length,
        renderJobs: allRenderJobs.length
    };
    const projectRows = projectDetails
        .map(detail => ({
        projectId: detail.project.projectId,
        projectName: detail.project.projectName,
        status: detail.project.status,
        createdAt: detail.project.createdAt,
        client: detail.project
            ?.client
            ?.user ||
            null,
        designers: uniqueUsers(detail.designers),
        assetCount: detail.assets.length,
        pendingReviewCount: detail.assets
            .flatMap(assetDetail => assetDetail.versions)
            .filter(version => version.status ===
            'FOR_REVIEW')
            .length,
        renderJobCount: detail.renderJobs.length
    }))
        .sort((a, b) => new Date(b.createdAt || 0) -
        new Date(a.createdAt || 0));
    const sortedNotifications = notifications
        .slice()
        .sort((a, b) => new Date(b.createdAt || 0) -
        new Date(a.createdAt || 0));
    return {
        counts,
        projects: projectRows,
        recentActivity: buildProjectActivity(projectDetails),
        notifications: sortedNotifications.slice(0, 5),
        unreadCount: notifications.filter(notification => notification.isRead ===
            false).length
    };
}

});
__register("src/services/projectManagerProjectService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadManagerProjects = loadManagerProjects;
exports.loadManagerProjectDetails = loadManagerProjectDetails;
exports.deliverManagerProject = deliverManagerProject;
exports.loadCreateProjectOptions = loadCreateProjectOptions;
exports.createManagerProject = createManagerProject;
const authService_1 = require("./authService");
const clientProjectService_1 = require("./clientProjectService");
const consultationService_1 = require("./consultationService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
function getDisplayName({ firstName, lastName, email }) {
    const fullName = `${firstName || ''} ${lastName || ''}`
        .trim();
    return (fullName ||
        email ||
        'Unknown User');
}
async function loadManagerProjects() {
    return (0, clientProjectService_1.loadClientProjects)();
}
async function loadManagerProjectDetails(projectId) {
    return (0, clientProjectService_1.loadClientProjectDetails)(projectId);
}
async function deliverManagerProject(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/projects/${projectId}/deliver`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    });
    return readJson(response, 'Unable to deliver this project.');
}
async function loadCreateProjectOptions() {
    const [assignmentResponse, consultations] = await Promise.all([
        (0, authService_1.authenticatedFetch)('/api/project-assignment-options'),
        (0, consultationService_1.loadManagerConsultations)()
    ]);
    const assignmentData = await readJson(assignmentResponse, 'Unable to load Interior Designer options.');
    const designers = (assignmentData.designers || [])
        .map(designer => ({
        userId: Number(designer.userId),
        name: getDisplayName(designer),
        email: designer.email || '',
        status: designer.status || ''
    }))
        .filter(designer => designer.userId &&
        designer.status !==
            'INACTIVE')
        .sort((a, b) => a.name.localeCompare(b.name));
    const pendingConsultations = consultations
        .filter(consultation => consultation.status ===
        'NEW')
        .sort((a, b) => new Date(b.createdAt || 0) -
        new Date(a.createdAt || 0));
    return {
        consultations: pendingConsultations,
        designers
    };
}
async function createProjectRecord({ clientId, consultationId, projectName, description }) {
    const response = await (0, authService_1.authenticatedFetch)('/api/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            clientId: Number(clientId),
            consultationId: Number(consultationId),
            projectName: projectName.trim(),
            description: description.trim()
        })
    });
    return readJson(response, 'Unable to create the project.');
}
async function assignDesignerToProject({ projectId, designerUserId }) {
    const response = await (0, authService_1.authenticatedFetch)('/api/project-members', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            projectId: Number(projectId),
            userId: Number(designerUserId),
            assignedRole: 'INTERIOR_DESIGNER'
        })
    });
    return readJson(response, 'Unable to assign the selected Designer.');
}
async function createManagerProject({ clientId, consultationId, designerUserId, projectName, description }) {
    const project = await createProjectRecord({
        clientId,
        consultationId,
        projectName,
        description
    });
    try {
        await assignDesignerToProject({
            projectId: project.projectId,
            designerUserId
        });
    }
    catch (error) {
        throw new Error(`Project #${project.projectId} was created, but the Designer could not be assigned. ${error.message}`, {
            cause: error
        });
    }
    return project;
}

});
__register("src/services/projectManagerRenderQueueService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadProjectManagerRenderQueue = loadProjectManagerRenderQueue;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
function getDisplayName(user, fallback = 'Unknown User') {
    if (!user) {
        return fallback;
    }
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`
        .trim();
    return (fullName ||
        user.email ||
        fallback);
}
async function loadProjectManagerRenderQueue() {
    const response = await (0, authService_1.authenticatedFetch)('/api/render-jobs');
    const data = await readJson(response, 'Unable to load render jobs.');
    const jobs = Array.isArray(data)
        ? data
        : [];
    return jobs
        .map(job => ({
        renderJobId: job.renderJobId,
        projectId: job.project?.projectId,
        projectName: job.project?.projectName ||
            'Unknown Project',
        projectStatus: job.project?.status ||
            'UNKNOWN',
        versionId: job.version?.versionId,
        versionNumber: job.version?.versionNumber,
        versionStatus: job.version?.status ||
            'UNKNOWN',
        assetId: job.version?.asset?.assetId,
        assetName: job.version?.asset?.assetName ||
            'Unknown Asset',
        submittedBy: getDisplayName(job.submittedBy, 'Interior Designer'),
        submittedByEmail: job.submittedBy?.email ||
            '',
        priority: job.priority ||
            'NORMAL',
        status: job.status ||
            'QUEUED',
        submittedAt: job.submittedAt,
        updatedAt: job.updatedAt,
        completedAt: job.completedAt
    }))
        .sort((a, b) => new Date(b.submittedAt ||
        0) -
        new Date(a.submittedAt ||
            0));
}

});
__register("src/services/projectManagerReportsService.js",function(module,exports,require){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadProjectManagerReports = loadProjectManagerReports;
const authService_1 = require("./authService");
async function readJson(response, fallbackMessage) {
    let data;
    try {
        data =
            await response.json();
    }
    catch {
        data = null;
    }
    if (!response.ok) {
        throw new Error(data?.message ||
            fallbackMessage);
    }
    return data;
}
async function getProjects() {
    const response = await (0, authService_1.authenticatedFetch)('/api/projects');
    const data = await readJson(response, 'Unable to load projects.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getAssets(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/assets/project/${projectId}`);
    const data = await readJson(response, 'Unable to load project assets.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getVersions(assetId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/asset-versions/asset/${assetId}`);
    const data = await readJson(response, 'Unable to load asset versions.');
    return Array.isArray(data)
        ? data
        : [];
}
async function getRenderJobs(projectId) {
    const response = await (0, authService_1.authenticatedFetch)(`/api/render-jobs/project/${projectId}`);
    const data = await readJson(response, 'Unable to load render jobs.');
    return Array.isArray(data)
        ? data
        : [];
}
async function loadProjectManagerReports() {
    const projects = await getProjects();
    const projectDetails = await Promise.all(projects.map(async (project) => {
        const [assets, renderJobs] = await Promise.all([
            getAssets(project.projectId),
            getRenderJobs(project.projectId)
        ]);
        const assetDetails = await Promise.all(assets.map(async (asset) => ({
            asset,
            versions: await getVersions(asset.assetId)
        })));
        const versions = assetDetails.flatMap(item => item.versions);
        return {
            project,
            assets: assetDetails,
            versions,
            renderJobs
        };
    }));
    const allVersions = projectDetails.flatMap(detail => detail.versions);
    const allRenderJobs = projectDetails.flatMap(detail => detail.renderJobs);
    const projectStatus = {
        active: projects.filter(project => project.status ===
            'ACTIVE').length,
        delivered: projects.filter(project => project.status ===
            'DELIVERED').length
    };
    const reviewStatus = {
        pending: allVersions.filter(version => version.status ===
            'FOR_REVIEW').length,
        revisions: allVersions.filter(version => version.status ===
            'REVISION_REQUESTED').length,
        renderReady: allVersions.filter(version => version.status ===
            'RENDER_READY').length,
        drafts: allVersions.filter(version => version.status ===
            'DRAFT').length
    };
    const renderStatus = {
        queued: allRenderJobs.filter(job => job.status ===
            'QUEUED').length,
        rendering: allRenderJobs.filter(job => job.status ===
            'RENDERING').length,
        completed: allRenderJobs.filter(job => job.status ===
            'COMPLETED').length,
        failed: allRenderJobs.filter(job => job.status ===
            'FAILED').length
    };
    const projectRows = projectDetails
        .map(detail => ({
        projectId: detail.project.projectId,
        projectName: detail.project.projectName,
        status: detail.project.status,
        createdAt: detail.project.createdAt,
        assetCount: detail.assets.length,
        versionCount: detail.versions.length,
        pendingReviews: detail.versions.filter(version => version.status ===
            'FOR_REVIEW').length,
        revisionRequests: detail.versions.filter(version => version.status ===
            'REVISION_REQUESTED').length,
        renderReady: detail.versions.filter(version => version.status ===
            'RENDER_READY').length,
        renderJobs: detail.renderJobs.length,
        completedRenders: detail.renderJobs.filter(job => job.status ===
            'COMPLETED').length,
        failedRenders: detail.renderJobs.filter(job => job.status ===
            'FAILED').length
    }))
        .sort((a, b) => new Date(b.createdAt || 0) -
        new Date(a.createdAt || 0));
    return {
        summary: {
            totalProjects: projects.length,
            activeProjects: projectStatus.active,
            pendingReviews: reviewStatus.pending,
            revisionRequests: reviewStatus.revisions,
            renderJobs: allRenderJobs.length,
            completedRenders: renderStatus.completed,
            failedRenders: renderStatus.failed
        },
        projectStatus,
        reviewStatus,
        renderStatus,
        projectRows
    };
}

});
window.__interiorRuntime.start();
})();
