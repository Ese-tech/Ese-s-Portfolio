import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CVDownload() {
  return (
    <section id="cv-download" className="bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Download My CV</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get my curriculum vitae in your preferred language.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* English CV */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                English CV
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Professional resume in English format
              </p>
              <Button 
                asChild 
                className="w-full"
                variant="default"
              >
                <a 
                  href="/CV_EN.pdf" 
                  download="Ese_Osagie_CV_EN.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download English CV
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* German CV */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                German CV
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Lebenslauf im deutschen Format
              </p>
              <Button 
                asChild 
                className="w-full"
                variant="default"
              >
                <a 
                  href="/Lebeneslauf.pdf" 
                  download="Ese_Osagie_Lebenslauf.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Lebenslauf herunterladen
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}