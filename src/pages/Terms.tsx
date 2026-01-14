import { Layout } from '@/components/layout/Layout';

const Terms = () => {
  return (
    <Layout>
      <div className="container-custom py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: January 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using the SportsGear website, you agree to be bound by these Terms 
              and Conditions. If you disagree with any part of these terms, you may not access 
              the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily download one copy of the materials on 
              SportsGear's website for personal, non-commercial transitory viewing only. 
              This is the grant of a license, not a transfer of title, and under this license 
              you may not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or proprietary notations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Products and Pricing</h2>
            <p className="text-muted-foreground">
              All prices are displayed in USD and are subject to change without notice. We 
              reserve the right to modify or discontinue any product without notice. We shall 
              not be liable to you or any third party for any modification, price change, or 
              discontinuance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Orders and Payment</h2>
            <p className="text-muted-foreground">
              We reserve the right to refuse any order you place with us. We may, in our sole 
              discretion, limit or cancel quantities purchased per person, per household, or 
              per order. All payments must be received in full before orders are shipped.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Shipping and Returns</h2>
            <p className="text-muted-foreground mb-4">
              We offer free shipping on orders over $99. Standard shipping typically takes 3-7 
              business days. We accept returns within 30 days of purchase for a full refund, 
              provided items are:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Unused and in original condition</li>
              <li>In original packaging with all tags attached</li>
              <li>Accompanied by original receipt or proof of purchase</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              In no event shall SportsGear or its suppliers be liable for any damages arising 
              out of the use or inability to use the materials on SportsGear's website, even 
              if SportsGear or an authorized representative has been notified of the possibility 
              of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with the laws of the 
              State of California, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p className="text-muted-foreground">
              Questions about the Terms & Conditions should be sent to us at legal@sportsgear.com 
              or call us at +1 (555) 123-4567.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
