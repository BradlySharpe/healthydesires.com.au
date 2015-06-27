<script type="application/ld+json">
{ 
	"@context" : "http://schema.org",
  "@type" : "Organization",
  "name" : "{{ site.title }}",
  "description" : "{{ site.description }}",
  "telephone" : "{{ site.business.localNumber }}",
  "url" : "{{ site.baseurl | prepend: site.url }}",
  "logo" : "{{ site.business.logo | prepend: site.baseurl | prepend: site.url }}",
  "founder" : {
  	"@type" : "Person",
  	"givenName" : "{{ site.founder.firstName }}",
  	"familyName" : "{{ site.founder.lastName }}",
  	"@id" : "{{ site.founder.link}}"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "{{ site.business.city }}",
    "addressRegion": "{{ site.business.state }}",
    "postalCode": "{{ site.business.postCode }}",
    "streetAddress": "{{ site.business.address }}"
  },
  "contactPoint" : 
  [
    { 
    	"@type" : "ContactPoint",
      "telephone" : "{{ site.business.internationalNumber }}",
      "contactType" : "customer service",
      "areaServed" : "AU"
    } 
  ] 
}
</script>

<script type="application/ld+json">
{
    "@context": "http://schema.org",
    "@type": "WebSite",
    "url": "{{ site.baseurl | prepend: site.url }}",
    "name": "{{ site.title }}",
    "author" : {
      "@type" : "Person",
      "givenName" : "Bradly",
      "additionalName" : "Warren",
      "familyName" : "Sharpe",
      "birthDate" : "1989-12-02",
      "@id" : "http://bradlysharpe.com.au"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{{ site.baseurl | prepend: site.url }}/search/?&q={query}",
      "query-input": "required name=query"
    }
}
</script>