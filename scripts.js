const resources = [
    { name: "Google Scholar", link: "https://scholar.google.com/" },
    { name: "ScienceDirect", link: "https://www.sciencedirect.com/" },
    { name: "PubChem", link: "https://pubchem.ncbi.nlm.nih.gov/" },
    { name: "Royal Society of Chemistry", link: "https://www.rsc.org/" },
    { name: "ChemSpider", link: "http://www.chemspider.com/" },
    { name: "American Chemical Society", link: "https://www.acs.org/" },
    { name: "Wiley Online Library", link: "https://onlinelibrary.wiley.com/" },
    { name: "SpringerLink Chemistry", link: "https://www.springer.com/gp/chemistry" },
    { name: "JSTOR Chemistry", link: "https://www.jstor.org/subject/chemistry" },
    { name: "Chemistry World", link: "https://www.chemistryworld.com/" },
    { name: "Cambridge University Press Chemistry", link: "https://www.cambridge.org/core/what-we-publish/chemistry" },
    { name: "Taylor & Francis Chemistry", link: "https://www.tandfonline.com/action/showPublications?category=57040438" },
    { name: "MDPI Open Access Journals", link: "https://www.mdpi.com/journal/molecules" },
    { name: "Nature Chemistry", link: "https://www.nature.com/nchem/" },
    { name: "Science Magazine", link: "https://www.sciencemag.org/topic/chemistry" },
    { name: "Chemistry LibreTexts", link: "https://chem.libretexts.org/" },
    { name: "Organic Chemistry Portal", link: "https://www.organic-chemistry.org/" },
    { name: "ChemGuide", link: "https://www.chemguide.co.uk/" },
    { name: "ChemCollective", link: "http://chemcollective.org/" },
    { name: "Chem1 Virtual Textbook", link: "http://www.chem1.com/" },
    { name: "National Center for Biotechnology Information", link: "https://www.ncbi.nlm.nih.gov/" },
    { name: "ACS Publications", link: "https://pubs.acs.org/" },
    { name: "IOPscience Chemistry", link: "https://iopscience.iop.org/journalList/chemistry" },
    { name: "ChemRxiv", link: "https://chemrxiv.org/" },
    { name: "arXiv Chemistry", link: "https://arxiv.org/list/chem/new" },
    { name: "SciFinder", link: "https://scifinder.cas.org/" },
    { name: "Chemistry Stack Exchange", link: "https://chemistry.stackexchange.com/" },
    { name: "Khan Academy Chemistry", link: "https://www.khanacademy.org/science/chemistry" },
    { name: "Coursera Chemistry", link: "https://www.coursera.org/courses?query=chemistry" },
    { name: "edX Chemistry", link: "https://www.edx.org/course/subject/chemistry" },
    { name: "FutureLearn Chemistry", link: "https://www.futurelearn.com/subjects/science-engineering-and-maths-courses/chemistry" },
    { name: "MIT OpenCourseWare Chemistry", link: "https://ocw.mit.edu/courses/chemistry/" },
    { name: "OpenStax Chemistry", link: "https://openstax.org/subjects/chemistry" },
    { name: "BioMed Central Chemistry", link: "https://www.biomedcentral.com/journals/chemistry" },
    { name: "Chemistry Europe", link: "https://chemistry-europe.onlinelibrary.wiley.com/" },
    { name: "Beilstein Journal of Organic Chemistry", link: "https://www.beilstein-journals.org/bjoc" },
    { name: "ChemPapers", link: "https://chempapers.com/" },
    { name: "Chemistry Resources by LibreTexts", link: "https://chem.libretexts.org/" },
    { name: "Plos Chemistry", link: "https://journals.plos.org/plosone/browse/chemistry" },
    { name: "ChemEd X", link: "https://www.chemedx.org/" },
    { name: "ERIC Chemistry Resources", link: "https://eric.ed.gov/?q=chemistry" },
    { name: "Sci-Hub", link: "https://sci-hub.se/" },
    { name: "Open Access Chemistry", link: "https://www.doabooks.org/" },
    { name: "Chemical Engineering Journal", link: "https://www.journals.elsevier.com/chemical-engineering-journal" },
    { name: "ChemWeb", link: "http://www.chemweb.com/" },
    { name: "ChemView", link: "https://chemview.epa.gov/chemview" },
    { name: "ChemTK", link: "http://chem.tk/" },
    { name: "ChemBlink", link: "http://www.chemblink.com/" },
    { name: "ChemSpider SyntheticPages", link: "https://cssp.chemspider.com/" },
    { name: "Chempedia", link: "https://chempedia.com/" }
];

const resourceContainer = document.getElementById('resourceContainer');

resources.forEach(resource => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    
    link.href = resource.link;
    link.textContent = resource.name;
    link.target = "_blank";
    
    listItem.appendChild(link);
    resourceContainer.appendChild(listItem);
});
