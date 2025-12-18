import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from '@/react-app/components/ui/menubar';

export default function MenubarDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Menubar</h1>
        <p className="text-lg text-muted-foreground">
          A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
        </p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://rnprimitives.com/menubar/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          Docs ↗
        </a>
        <a
          href="https://rnprimitives.com/menubar/#props"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-accent"
        >
          API Reference ↗
        </a>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        
        <div className="rounded-lg border border-border bg-card p-8">
          <div className="flex justify-center">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    New Window <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>New Incognito Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Email link</MenubarItem>
                      <MenubarItem>Messages</MenubarItem>
                      <MenubarItem>Notes</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print... <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Find</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Search the web</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Find...</MenubarItem>
                      <MenubarItem>Find Next</MenubarItem>
                      <MenubarItem>Find Previous</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>Cut</MenubarItem>
                  <MenubarItem>Copy</MenubarItem>
                  <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>
                    Always Show Full URLs
                  </MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem inset>
                    Reload <MenubarShortcut>⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled inset>
                    Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Hide Sidebar</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Profiles</MenubarTrigger>
                <MenubarContent>
                  <MenubarRadioGroup value="benoit">
                    <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                    <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                    <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem inset>Edit...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Add Profile...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
            <span className="text-sm font-medium">CLI</span>
          </div>
          <div className="p-4">
            <pre className="text-sm">
              <code className="text-primary">npx @react-native-reusables/cli@latest add menubar</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        
        <div className="rounded-lg border border-border bg-yellow-50 dark:bg-yellow-950/20 p-4 mb-4">
          <div className="flex gap-2">
            <div className="text-yellow-600 dark:text-yellow-500 font-semibold text-sm">
              Portal Setup Required
            </div>
          </div>
          <p className="text-sm text-yellow-800 dark:text-yellow-200 mt-1">
            A <code className="px-1 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900">PortalHost</code> must be added at the root of your app to support portal rendering on native platforms. Without it, components that rely on portals, like this one, will not render correctly.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
            <span className="text-sm font-medium">Import</span>
          </div>
          <div className="p-4 bg-muted/30">
            <pre className="text-sm overflow-x-auto">
              <code>{`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Text } from '@/components/ui/text';`}</code>
            </pre>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
            <span className="text-sm font-medium">Example</span>
          </div>
          <div className="p-4 bg-muted/30">
            <pre className="text-sm overflow-x-auto">
              <code>{`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>
      <Text>File</Text>
    </MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        <Text>New Tab</Text> <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        <Text>New Window</Text>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        <Text>Share</Text>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        <Text>Print</Text>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
