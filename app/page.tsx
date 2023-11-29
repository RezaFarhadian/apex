import Button from '@/components/Button'
import Feature from '@/components/Feature'
import Figure from '@/components/Figure'
import Input from '@/components/Input'
import TextArea from '@/components/TextArea'

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <div className="pt-32 pl-32 bg-header-image bg-cover bg-no-repeat bg-center h-screen flex flex-col gap-4 shadow-2xl" style={{
        boxShadow: "inset 700px 0px 169px 0px rgba(0,0,0,0.75)"
      }}>
        <div className="text-3xl mr-12 sm:mr-0">
          <b>
            Distinctive Approach to Real State <br/> Investment <br/>
          </b>
          Unlocking Off-Market Opportunities
        </div>

        <Button className="mt-2">
          Contact Us Today
        </Button>
      </div>

      <div className="w-1/2 m-auto sm:w-1/3">
        <img alt="Apex Logo" width={150} src="/output-onlinepngtools.png" className="m-auto opacity-50" />
        
        <p className="text-center -mt-10">
          Discover Apex Pioneer Group, your trusted partner in
          off-market real estate. Specializing in acquiring properties
          needing repairs or quick closings, we operate with a unique
          approach 0% buyers agent commission.
          <br /> <br />
          Focused on the Dallas/Fort Worth Metroplex, we actively
          seek work needed properties. Meet Apex Pioneer Group,
          our flagship, dedicated to purchasing SFRs and multifamily
          units.
        </p>
      </div>

      <div className="flex flex-col m-auto md:flex-row gap-16">
        <Figure src="/jennifer-r-sZ9F_XkGJfI-unsplash.jpg">
          Specializing in <br /> dated/distressed <br /> properties
        </Figure>
        <Figure src="/austin-kehmeier-lyiKExA4zQA-unsplash.jpg">
          Willingness to <br /> consider properties in <br /> any condition
        </Figure>
      </div>

      <div className="flex flex-col m-auto gap-8 md:flex-row">
        <Feature icon="bg-efficient-offer-process" headline="Efficient Offer Process">
          Same day offers upon <br />
          receiving property  <br />
          information
        </Feature>

        <Feature icon="bg-financial-flexibility" headline="Financial Flexibility">
          Cash transactions with no <br />
          financing contingency
        </Feature>

        <Feature icon="bg-speedy-closings" headline="Speedy Closings">
          Ability to close deals in as <br />
          little as 7 days
        </Feature>

        <Feature icon="bg-cost-transparency" headline="Cost Transparency">
          No fees for sellers, <br />
          including no buyer's agent <br /> 
          commission.
        </Feature>
      </div>

      <div className="bg-middle w-full bg-cover bg-no-repeat middle-polygon-masked" style={{ height: "300px" }}>
        <h2 className="text-2xl text-center font-bold mt-24">All closing costs covered by buyer</h2>
      </div>

      <div className="bg-footer-image bg-cover bg-no-repeat bg-center h-screen" style={{
        boxShadow: "inset 0px 500px 169px 0px rgba(0,0,0,0.75)"
      }}>
        <div className="flex flex-col justify-center gap-20 mt-36 sm:flex-row items-center text-center">
          <div className="sm:border-r border-white sm:pr-20">
            <p>
              Feel free to reach out for any inquiries. <br /> <br />
              At Apex Pioneer Group, we're always ready to assist <br />
              you. You can call or text us at <b>(469) 207-1824.</b> <br />
              We're open to exploring various opportunities and <br />
              promise a prompt response, often providing answers <br />
              on the same day. <br /> <br />
              Looking forward to the possibility of closing a deal <br />
              together soon!
            </p>
          </div>
          <div>
            <Input placeholder="Name" /> <br /><br />
            <Input placeholder="Company name" /> <br /><br />
            <TextArea placeholder="Inquiry"/><br /><br />
            <Button disabled>
              Submit
            </Button>
          </div>
        </div>

        <p className="mt-36 text-center">
          © 2023 Apex Pioneer Group. All rights reserved.
        </p>
      </div>
    </main>
  )
}
