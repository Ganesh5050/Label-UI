export default function BlocksPreview() {
  const blocks = [
    {
      title: 'Authentication Blocks',
      description: 'Ready-to-use authentication flows',
      image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&auto=format&fit=crop',
      badge: 'New',
    },
    {
      title: 'Dashboard Layouts',
      description: 'Complete dashboard templates',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    },
    {
      title: 'Form Patterns',
      description: 'Common form layouts and validation',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop',
    },
    {
      title: 'Data Tables',
      description: 'Sortable, filterable data grids',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    },
  ];

  return (
    <div className="w-full px-4 py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-3">
            Blocks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pre-built page sections and patterns. Copy, paste, and customize.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blocks.map((block, index) => (
            <a
              key={index}
              href="#"
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-200"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={block.image}
                  alt={block.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {block.title}
                  </h3>
                  {block.badge && (
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {block.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {block.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
