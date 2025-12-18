import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import DocsLayout from "@/react-app/layouts/DocsLayout";
import Introduction from "@/react-app/pages/docs/Introduction";
import Installation from "@/react-app/pages/docs/Installation";
import Customization from "@/react-app/pages/docs/Customization";
import CLI from "@/react-app/pages/docs/CLI";
import Changelog from "@/react-app/pages/docs/Changelog";
import CreateYourOwnRegistry from "@/react-app/pages/docs/CreateYourOwnRegistry";

// Blocks
import AuthenticationIndex from "@/react-app/pages/docs/blocks/AuthenticationIndex";
import SignInFormBlock from "@/react-app/pages/docs/blocks/SignInForm";
import SignUpFormBlock from "@/react-app/pages/docs/blocks/SignUpForm";
import VerifyEmailFormBlock from "@/react-app/pages/docs/blocks/VerifyEmailForm";
import ResetPasswordFormBlock from "@/react-app/pages/docs/blocks/ResetPasswordForm";
import ForgotPasswordFormBlock from "@/react-app/pages/docs/blocks/ForgotPasswordForm";
import SocialConnectionsBlock from "@/react-app/pages/docs/blocks/SocialConnections";
import UserMenuBlock from "@/react-app/pages/docs/blocks/UserMenu";

// Components
import AccordionDoc from "@/react-app/pages/docs/components/Accordion";
import AlertDoc from "@/react-app/pages/docs/components/Alert";
import AlertDialogDoc from "@/react-app/pages/docs/components/AlertDialog";
import AspectRatioDoc from "@/react-app/pages/docs/components/AspectRatio";
import AvatarDoc from "@/react-app/pages/docs/components/Avatar";
import BadgeDoc from "@/react-app/pages/docs/components/Badge";
import ButtonDoc from "@/react-app/pages/docs/components/Button";
import CardDoc from "@/react-app/pages/docs/components/Card";
import CheckboxDoc from "@/react-app/pages/docs/components/Checkbox";
import CollapsibleDoc from "@/react-app/pages/docs/components/Collapsible";
import ContextMenuDoc from "@/react-app/pages/docs/components/ContextMenu";
import DialogDoc from "@/react-app/pages/docs/components/Dialog";
import DropdownMenuDoc from "@/react-app/pages/docs/components/DropdownMenu";
import FormDoc from "@/react-app/pages/docs/components/Form";
import HoverCardDoc from "@/react-app/pages/docs/components/HoverCard";
import InputDoc from "@/react-app/pages/docs/components/Input";
import LabelDoc from "@/react-app/pages/docs/components/Label";
import MenubarDoc from "@/react-app/pages/docs/components/Menubar";
import NavigationMenuDoc from "@/react-app/pages/docs/components/NavigationMenu";
import PopoverDoc from "@/react-app/pages/docs/components/Popover";
import ProgressDoc from "@/react-app/pages/docs/components/Progress";
import RadioGroupDoc from "@/react-app/pages/docs/components/RadioGroup";
import SelectDoc from "@/react-app/pages/docs/components/Select";
import SeparatorDoc from "@/react-app/pages/docs/components/Separator";
import SkeletonDoc from "@/react-app/pages/docs/components/Skeleton";
import SliderDoc from "@/react-app/pages/docs/components/Slider";
import SwitchDoc from "@/react-app/pages/docs/components/Switch";
import TableDoc from "@/react-app/pages/docs/components/Table";
import TabsDoc from "@/react-app/pages/docs/components/Tabs";
import TextDoc from "@/react-app/pages/docs/components/Text";
import TextareaDoc from "@/react-app/pages/docs/components/Textarea";
import ToastDoc from "@/react-app/pages/docs/components/Toast";
import ToggleDoc from "@/react-app/pages/docs/components/Toggle";
import ToggleGroupDoc from "@/react-app/pages/docs/components/ToggleGroup";
import TooltipDoc from "@/react-app/pages/docs/components/Tooltip";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<Introduction />} />
          <Route path="installation" element={<Installation />} />
          <Route path="customization" element={<Customization />} />
          <Route path="cli" element={<CLI />} />
          <Route path="changelog" element={<Changelog />} />
          <Route path="create-your-own-registry" element={<CreateYourOwnRegistry />} />
          
          {/* Blocks - Authentication */}
          <Route path="blocks/authentication" element={<AuthenticationIndex />} />
          <Route path="blocks/authentication/sign-in-form" element={<SignInFormBlock />} />
          <Route path="blocks/authentication/sign-up-form" element={<SignUpFormBlock />} />
          <Route path="blocks/authentication/verify-email-form" element={<VerifyEmailFormBlock />} />
          <Route path="blocks/authentication/reset-password-form" element={<ResetPasswordFormBlock />} />
          <Route path="blocks/authentication/forgot-password-form" element={<ForgotPasswordFormBlock />} />
          <Route path="blocks/authentication/social-connections" element={<SocialConnectionsBlock />} />
          <Route path="blocks/authentication/user-menu" element={<UserMenuBlock />} />
          
          {/* Components */}
          <Route path="components/accordion" element={<AccordionDoc />} />
          <Route path="components/alert" element={<AlertDoc />} />
          <Route path="components/alert-dialog" element={<AlertDialogDoc />} />
          <Route path="components/aspect-ratio" element={<AspectRatioDoc />} />
          <Route path="components/avatar" element={<AvatarDoc />} />
          <Route path="components/badge" element={<BadgeDoc />} />
          <Route path="components/button" element={<ButtonDoc />} />
          <Route path="components/card" element={<CardDoc />} />
          <Route path="components/checkbox" element={<CheckboxDoc />} />
          <Route path="components/collapsible" element={<CollapsibleDoc />} />
          <Route path="components/context-menu" element={<ContextMenuDoc />} />
          <Route path="components/dialog" element={<DialogDoc />} />
          <Route path="components/dropdown-menu" element={<DropdownMenuDoc />} />
          <Route path="components/form" element={<FormDoc />} />
          <Route path="components/hover-card" element={<HoverCardDoc />} />
          <Route path="components/input" element={<InputDoc />} />
          <Route path="components/label" element={<LabelDoc />} />
          <Route path="components/menubar" element={<MenubarDoc />} />
          <Route path="components/navigation-menu" element={<NavigationMenuDoc />} />
          <Route path="components/popover" element={<PopoverDoc />} />
          <Route path="components/progress" element={<ProgressDoc />} />
          <Route path="components/radio-group" element={<RadioGroupDoc />} />
          <Route path="components/select" element={<SelectDoc />} />
          <Route path="components/separator" element={<SeparatorDoc />} />
          <Route path="components/skeleton" element={<SkeletonDoc />} />
          <Route path="components/slider" element={<SliderDoc />} />
          <Route path="components/switch" element={<SwitchDoc />} />
          <Route path="components/table" element={<TableDoc />} />
          <Route path="components/tabs" element={<TabsDoc />} />
          <Route path="components/text" element={<TextDoc />} />
          <Route path="components/textarea" element={<TextareaDoc />} />
          <Route path="components/toast" element={<ToastDoc />} />
          <Route path="components/toggle" element={<ToggleDoc />} />
          <Route path="components/toggle-group" element={<ToggleGroupDoc />} />
          <Route path="components/tooltip" element={<TooltipDoc />} />
        </Route>
      </Routes>
    </Router>
  );
}
