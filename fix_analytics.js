const fs = require('fs');
let code = fs.readFileSync('apps/admin/src/pages/AnalyticsPage.tsx', 'utf8');

// Replace Grid props
code = code.replace(/<Grid item xs={12} sm={6} md={3}>/g, '<Grid size={{ xs: 12, sm: 6, md: 3 }}>');

// Replace dataset={metrics.enrollmentTrends} with dataset={metrics.enrollmentTrends as any}
code = code.replace('dataset={metrics.enrollmentTrends}', 'dataset={metrics.enrollmentTrends as any[]}');

// Remove slotProps={{ legend: { hidden: true } }}
code = code.replace(/slotProps={{\s*legend:\s*{\s*hidden:\s*true\s*}\s*}}/g, '');

fs.writeFileSync('apps/admin/src/pages/AnalyticsPage.tsx', code);
