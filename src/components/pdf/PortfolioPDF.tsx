import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { PortfolioData } from '@/data/portfolio';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },
  coverPage: {
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#111111',
  },
  subtitle: {
    fontSize: 18,
    color: '#666666',
    marginBottom: 20,
  },
  tagline: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111111',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    paddingBottom: 5,
  },
  text: {
    fontSize: 12,
    color: '#444444',
    lineHeight: 1.5,
  },
  projectContainer: {
    marginBottom: 20,
  },
  projectTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 5,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  techBadge: {
    fontSize: 10,
    backgroundColor: '#f4f4f5',
    color: '#3f3f46',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 4,
  },
  heroImage: {
    width: '100%',
    height: 350,
    objectFit: 'cover',
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 20,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageGridItem: {
    width: '48%', // 2 per row
    marginRight: '2%',
    marginBottom: 10,
    height: 250,
    objectFit: 'contain',
    borderRadius: 6,
  },
  imageGridItemAlt: {
    width: '48%', // 2 per row
    marginRight: 0,
    marginBottom: 10,
    height: 250,
    objectFit: 'contain',
    borderRadius: 6,
  }
});

export const PortfolioPDF = ({ data }: { data: PortfolioData }) => {
  const { name, title, tagline, about } = data.personalInfo;
  
  return (
    <Document>
      {/* Cover Page */}
      <Page size="A4" style={styles.coverPage}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{title}</Text>
        <Text style={styles.tagline}>{tagline}</Text>
      </Page>

      {/* About Me Page */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.text}>{about}</Text>
      </Page>

      {/* Projects: 1 Page Break per project */}
      {data.projects.map((project, index) => {
        const heroImg = project.images[0];
        const gridImages = project.images.slice(1);

        return (
          <Page key={project.id} size="A4" style={styles.page}>
            <View style={styles.projectContainer}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              
              <View style={styles.techStack}>
                {project.tech.map((tech) => (
                  <Text key={tech} style={styles.techBadge}>{tech}</Text>
                ))}
              </View>
              
              <Text style={styles.text}>{project.description}</Text>
              
              {/* Featured / Hero Image */}
              {heroImg && (
                <Image src={heroImg} style={styles.heroImage} />
              )}

              {/* Remaining Images Grid */}
              {gridImages && gridImages.length > 0 && (
                <View style={styles.imageGrid}>
                  {gridImages.map((img, i) => (
                    <Image 
                      key={i} 
                      src={img} 
                      style={i % 2 === 0 ? styles.imageGridItem : styles.imageGridItemAlt} 
                    />
                  ))}
                </View>
              )}
            </View>
          </Page>
        );
      })}
    </Document>
  );
};
