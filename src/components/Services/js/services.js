// set 1
import jiraSvg from '../../../images/services-icons/jira-svg.svg';
import wikiSvg from '../../../images/services-icons/wiki.svg';
import bitBucketSvg from '../../../images/services-icons/bitbucket.svg';
// set 2
import sonarSourceSvg from '../../../images/services-icons/sonar-source-svg.svg';
import vaultSvg from '../../../images/services-icons/vault-svg.svg';
import appStorePng from '../../../images/services-icons/appstore-services-wubg.png';
// set 3
import nexusPng from '../../../images/services-icons/nexus-icon.png';
import nexusIqSvg from '../../../images/services-icons/nexus-iq-svg.svg';
import bambooPng from '../../../images/services-icons/bamboo-icon.png';
// set 4
import pipelinePng from '../../../images/services-icons/pipeline-icon.png';
import argoWorkflowsPng from '../../../images/services-icons/argo-workflows.png';
import openShiftSvg from '../../../images/services-icons/openshift-service.svg';

export const services = [
    [
        {
            src: jiraSvg,
            p: 'Deliver value to your users faster using proven agile tools to plan, track, ans discuss work across your teams.',
            h1: 'DevOps Boards',
            imgDivStyles: {
                maxWidth: '230px',
                maxHeight: '230px',
                display: 'flex',
                placeSelf: 'center',
                flexGrow: '1',
                flexBasis: '0',
            },
            h1DivStyles: { flexGrow: '0.5', flexBasis: '0', placeSelf: 'center' },
            pDivStyles: { flexGrow: '1', flexBasis: '0' },
            imgStyles: { minWidth: '150px', minHeight: '150px', height: '100%', width: '100%' },
            h1Styles: { color: 'black' },
            pStyles: { color: 'black', textAlign: 'center', padding: '10px' },
        },
        {
            src: wikiSvg,
            p: 'Get Team/Project Workspace Where Knowledge and Collaboration Meet. serving as the starting point for finding critical information throughout your organization.',
            h1: 'DevOps Wiki',
            imgDivStyles: {
                maxWidth: '230px',
                maxHeight: '230px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: '1',
                flexBasis: '0',
            },
            h1DivStyles: { flexGrow: '0.5', flexBasis: '0', placeSelf: 'center' },
            pDivStyles: { flexGrow: '1', flexBasis: '0' },
            imgStyles: { maxWidth: '150px', maxHeight: '150px', height: '100%', width: '100%' },
            h1Styles: { color: 'black' },
            pStyles: { color: 'black', textAlign: 'center', padding: '10px' },
        },
        {
            src: bitBucketSvg,
            p: 'Get unlimited, cloud-hosted private Git repositories and collaborate to build better code with pull requests and advanced file management.',
            h1: 'DevOps Repos',
            imgDivStyles: {},
            h1DivStyles: {},
            pDivStyles: {},
            imgStyles: { height: '30%', width: '50%', margin: '5rem auto' },
            h1Styles: { width: 'fit-content', margin: '0 auto 0 auto' },
            pStyles: { padding: '10px', textAlign: 'center', marginBottom: '4.5rem' },
        },
    ],
    [
        {
            src: sonarSourceSvg,
            p: 'SonarQube is universal tool for static code analysis that has become more or less the industry standard. Keeping code clean, simple, and easy to read is also a lot easier with SonarQube.',
            h1: 'DevOps Code Scan',
            imgDivStyles: {},
            h1DivStyles: {},
            pDivStyles: {},
            imgStyles: { height: '50%', maxHeight: '50%', maxWidth: '60%', minWidth: '55%', margin: 'auto' },
            h1Styles: { height: '25%', maxHeight: '25%', width: 'fit-content', margin: '0 auto 0.5rem auto' },
            pStyles: { height: '25%', maxHeight: '25%', padding: '10px', textAlign: 'center', marginBottom: 'auto' },
        },
        {
            src: vaultSvg,
            p: 'Securely Share App secrets through deployment environments with 100% integration with pipelines services.',
            h1: 'DevOps Secrets',
            imgDivStyles: {},
            h1DivStyles: {},
            pDivStyles: {},
            imgStyles: { height: '70%', maxHeight: '50%', maxWidth: '60%', minWidth: '55%', margin: 'auto' },
            h1Styles: { height: '15%', maxHeight: '25%', width: 'fit-content', margin: '0rem auto 0.5rem auto' },
            pStyles: { height: '15%', maxHeight: '25%', padding: '10px', textAlign: 'center', marginBottom: 'auto' },
        },
        {
            src: appStorePng,
            p: 'catalog service which will enable the search and discovery of corporate deployment libraries(helm charts), Kubernetes-ready apps.',
            h1: 'DevOps AppStore',
            imgDivStyles: {},
            h1DivStyles: {},
            pDivStyles: {},
            // prettier-ignore
            imgStyles: { height: '70%', maxHeight: '50%', maxWidth: '60%', minWidth: '55%', margin: 'auto' },
            h1Styles: { height: '15%', width: 'fit-content', margin: '0 auto 0.5rem auto' },
            pStyles: { height: '15%', padding: '10px', textAlign: 'center', marginBottom: 'auto' },
        },
    ],
    [
        {
            src: nexusPng,
            p: 'Single source of Truth for all your apps binaries, and build artifacts. Create, Host, and Share packages with your team, and add artifacts to your CI/CD pipelines with a single click.',
            h1: 'DevOps Artifacts',
            imgDivStyles: {},
            h1DivStyles: {},
            pDivStyles: {},
            imgStyles: { height: '50%', width: '80%', margin: '0 auto 1.5rem auto' },
            h1Styles: { width: 'fit-content', margin: '0 auto 0 auto' },
            pStyles: { padding: '10px', textAlign: 'center', marginBottom: '4.5rem' },
        },
        {
            src: nexusIqSvg,
            p: "Sonatype's policy engine powered by precise intelligence on open source components.it provides a number of tools to improve component usage in your software supply chain, allowing you to automate your processes and achieve accelerated speed to delivery while also increasing product quality.",
            // SCA => Software Composition Analysis
            h1: 'DevOps SCA',
            imgDivStyles: {},
            h1DivStyles: {},
            pDivStyles: {},
            imgStyles: { height: '50%', width: '80%', margin: '0 auto 1.5rem auto' },
            h1Styles: { width: 'fit-content', margin: '0 auto 0 auto' },
            pStyles: { padding: '10px', textAlign: 'center', marginBottom: '4.5rem' },
        },
        {
            src: bambooPng,
            p: 'Build your first continuous integration and continuous delivery pipeline with Bamboo, a CI server that can be used to automate the build, test, and release management for software application, creating a continuous delivery pipeline.',
            h1: 'DevOps CI',
            imgDivStyles: {},
            h1DivStyles: {},
            pDivStyles: {},
            imgStyles: { height: '50%', width: '80%', margin: '0 auto 1.5rem auto' },
            h1Styles: { width: 'fit-content', margin: '0 auto 0 auto' },
            pStyles: { padding: '10px', textAlign: 'center', marginBottom: '4.5rem' },
        },
    ],
    [
        {
            src: pipelinePng,
            p: 'Orchestrate the phases of software delivery till reaching end users while providing the ability to inject quality gates in between.',
            h1: 'DevOps Pipelines',
            imgDivStyles: {},
            h1DivStyles: {},
            pDivStyles: {},
            imgStyles: { height: '50%', width: '80%', margin: '0 auto 1.5rem auto' },
            h1Styles: { width: 'fit-content', margin: '0 auto 0 auto' },
            pStyles: { padding: '10px', textAlign: 'center', marginBottom: '4.5rem' },
        },
        {
            src: argoWorkflowsPng,
            p: 'Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on kubernetes.',
            h1: 'DevOps CD',
            imgDivStyles: {},
            h1DivStyles: {},
            pDivStyles: {},
            imgStyles: { height: '50%', width: '80%', margin: '0 auto 1.5rem auto' },
            h1Styles: { width: 'fit-content', margin: '0 auto 0 auto' },
            pStyles: { padding: '10px', textAlign: 'center', marginBottom: '4.5rem' },
        },
        {
            src: openShiftSvg,
            p: 'Red Hat OpenShift is enterprise-ready Kubernetes container platform built for an open hybrid cloud strategy. It provides a consistent application platform to manage hybrid cloud, multicloud, and edge deployments.',
            h1: 'DevOps Openshift',
            imgDivStyles: {},
            h1DivStyles: {},
            pDivStyles: {},
            imgStyles: { height: '50%', width: '80%', margin: '0 auto 1.5rem auto' },
            h1Styles: { width: 'fit-content', margin: '0 auto 0 auto' },
            pStyles: { padding: '10px', textAlign: 'center', marginBottom: '4.5rem' },
        },
    ],
];
